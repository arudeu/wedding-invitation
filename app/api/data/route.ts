import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "data.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";

    if (!name || name.trim() === "") {
    return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
    );
    }


    // ensure file exists and is valid JSON
    let json: any[] = [];
    try {
      const file = await fs.readFile(DATA_FILE, "utf8");
      json = JSON.parse(file);
      if (!Array.isArray(json)) json = [];
    } catch (readErr: any) {
      // if file not found or invalid, start with empty array
      if (readErr.code !== "ENOENT") {
        // unknown read error
        return NextResponse.json({ message: "Failed reading data file", detail: readErr.message }, { status: 500 });
      }
    }

    // append and write
    json.push({ name, createdAt: new Date().toISOString() });
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(json, null, 2), "utf8");

    return NextResponse.json({ message: "Saved successfully", item: { name } });
  } catch (err: any) {
    // return helpful debug message (safe for dev)
    return NextResponse.json({ message: "Server error", detail: err?.message ?? String(err) }, { status: 500 });
  }
}
