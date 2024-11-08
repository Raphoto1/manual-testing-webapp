import { NextResponse } from "next/server";
import { sqlConn } from "@/libs/mysql";
export async function GET() {
    const result = await sqlConn.query('SELECT NOW()')
    console.log(result);
    
    return NextResponse.json({ message: 'hello' });

}