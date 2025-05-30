//imports de app
import { createDev } from "@/Service/developer.service";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from dev" });
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    const result = await createDev(data);
    console.log(result);
    return NextResponse.json({ message: "ok" , status: 201 },{status: 201});
    
  } catch (error) {
    // error 1062: Duplicate entry
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ message: "Developer already exists" }, { status: 409 });
    }else{
      console.error("Error in POST /api/apps/dev:", error);
      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  }
}