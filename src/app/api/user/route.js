import { updateMetadataClerk } from "@/Service/users.service";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse({ message: "ok" }, { status: 200 });
}

export async function POST(req) {
  return NextResponse({ message: "connected", status: 202 });
}

export async function PUT(req) {
  try {
    const { userId } = await auth();
    console.log(userId);
    const body = await req.json();
    // const userId = body.userId;
    const data = { area: body.area, subArea: body.subArea };
    const result = await updateMetadataClerk(userId, data);
    console.log('RESULT PUT',result);
    return NextResponse({ message: result }, {status: 202 });
    
  } catch (error) {
     console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });  
  }
}
