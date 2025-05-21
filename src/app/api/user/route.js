import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse({ message: "ok" }, { status: 200 });
}
