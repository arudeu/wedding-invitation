import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name cannot be blank" },
        { status: 400 }
      );
    }

    // 1️⃣ Load allowed names
    const filePath = path.join(process.cwd(), "data", "names.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(fileData);
    const allowedNames: string[] = json.names || [];

    // 2️⃣ Case-insensitive check
    const inputLower = name.trim().toLowerCase();
    const found = allowedNames.some(
      (n) => n.trim().toLowerCase() === inputLower
    );

    if (!found) {
      return NextResponse.json({
        success: false,
        message: "Sorry, your name is not on the guest list.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Welcome! Your RSVP is confirmed.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
