import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

const filePath = path.join(process.cwd(), "data", "data.xlsx");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // ----- GET: Return only names -----
  if (req.method === "GET") {
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets["RSVP"] || workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    const names = json.map((row: any) => row.Name);

    return res.status(200).json(names);
  }

  // ----- POST: Insert new name -----
  if (req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    let workbook;
    let worksheet;
    let existingData: any[] = [];

    // File exists → read sheet
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets["RSVP"];
      existingData = XLSX.utils.sheet_to_json(worksheet);
    } else {
      // File does not exist → create workbook + sheet
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "RSVP");
    }

    // Add new entry
    existingData.push({
      ID: Date.now(),
      Name: name,
    });

    // Convert back to sheet
    const newSheet = XLSX.utils.json_to_sheet(existingData);
    workbook.Sheets["RSVP"] = newSheet;

    // Save Excel file
    XLSX.writeFile(workbook, filePath);

    return res.status(201).json({ success: true, name });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
