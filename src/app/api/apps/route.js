import { NextResponse } from "next/server";
import { sqlConn } from "@/libs/mysql";
//In case fails to connect

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rahumatic87';

// flush privileges;

export async function GET() {
  const result = await sqlConn.query("SELECT * FROM apps WHERE dev_id = 1");
  console.log(result);
  return NextResponse.json({ message: result });
}