import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse({ message: "ok" }, { status: 200 });
}

export async function POST(req) {
  
  return NextResponse({message:"connected", status:202})
}
