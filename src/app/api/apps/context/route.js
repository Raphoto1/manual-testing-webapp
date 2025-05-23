import { NextResponse } from "next/server";

export async function GET(request) {
  return new NextResponse("Hello from context");
    
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);
    
  return NextResponse.json({ message: "ok" , status: 201 },{status: 201});
}