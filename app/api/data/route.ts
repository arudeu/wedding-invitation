import { NextResponse } from "next/server";

const SECRET_KEY = process.env.JSONBIN_SECRET_KEY!;
const BIN_ID = process.env.JSONBIN_BIN_ID!;

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name cannot be blank" }, { status: 400 });
    }

    // 1️⃣ Get current bin
    const currentRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { "X-Master-Key": SECRET_KEY },
    });

    const currentData = await currentRes.json();

    // 2️⃣ Safely get current names (default to empty array if undefined)
    const currentNames: string[] = currentData?.record?.names || [];

    // 3️⃣ Add new name
    const updatedNames = [...currentNames, name];

    // 4️⃣ Update bin
    const updateRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": SECRET_KEY,
        "X-Bin-Versioning": "false",
      },
      body: JSON.stringify({ names: updatedNames }),
    });

    const updatedData = await updateRes.json();
    return NextResponse.json({ success: true, data: updatedData });
  } catch (err) {
    return NextResponse.json({ error: (err as any).message }, { status: 500 });
  }
}
