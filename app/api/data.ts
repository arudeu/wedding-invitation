import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "data.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const newItem = req.body;
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);

    // Optional: Assign an ID
    newItem.id = Date.now();
    data.push(newItem);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return res.status(201).json(newItem);
  }

  return res.status(405).end(); // Method Not Allowed
}