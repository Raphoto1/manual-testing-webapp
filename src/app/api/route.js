import { NextResponse } from "next/server";
import { sqlConn } from "@/libs/mysql";
//In case fails to connect

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rahumatic87';

// flush privileges;

export async function GET() {
  try {
    const result = await sqlConn.query("SELECT * FROM app_testing.questions;");
    console.log(result);
    return NextResponse.json({ message: 'success', payload: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: 'error', error: error.message }, { status: 500 });
  }
}
