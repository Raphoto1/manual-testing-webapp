//imports de app
import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({ message: "Hello from dev" });
}

export async function POST(request) {   
  const data = await request.json();
  return NextResponse.json({ message: "ok" , status: 201 },{status: 201});
}