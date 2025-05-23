//imports de app
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from fakeUser" });
}

export async function POST(request) {
  const body = await request.json();
  console.log("body", body);
  // const result = await sqlConn.query("SELECT * FROM app_testing.questions;");
  // console.log(result);
  return NextResponse.json({ message: "ok" , status: 201 },{status: 201});
}