//imports de app
import { NextResponse } from "next/server";
import { sqlConn } from "@/libs/mysql";
import { getAllDevs } from "@/Service/developer.service";

export async function GET() {
  const role = "admin"; // or "user" or "guest"
  const result = await getAllDevs(role)
  console.log(result);
  return NextResponse.json({ message: result });
}

export function POST(request) {
  const body = request.json();
  console.log("body", body);
  
  // const result = await sqlConn.query("SELECT * FROM app_testing.questions;");
  // console.log(result);
  return NextResponse.json({ message: "ok" });
}

export function PUT(req) {
  const body = req.json();
  console.log('body put', body);
  return NextResponse.json({message:'ok'},{status:202})
  
}