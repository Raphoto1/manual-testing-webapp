//imports de app
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from questions" });
}

export async function POST(request) {
    const file = await request.formData();
    const fileName = file.get("fileName");
    console.log(file);
    
  return NextResponse.json({ message: "ok", status: 201 }, { status: 201 });
}