//imports de app
import { NextResponse } from "next/server";
import { sqlConn } from "@/libs/mysql";

export function POST(request) {
  const body = request.json();
  console.log("body", body);
  // const result = await sqlConn.query("SELECT * FROM app_testing.questions;");
  // console.log(result);
  return NextResponse.json({ message: "ok" });
}

export async function GET() {
  const result = await sqlConn.query("SELECT * FROM app_testing.questions;");
  console.log(result);
  return NextResponse.json({ message: result });
}