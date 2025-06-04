//imports de app
import { NextResponse } from "next/server";
// own imports
import { createFakeUser, getAllFakeUsers } from "@/Service/fakeUser.service";

export async function GET() {
  try {
    const result = await getAllFakeUsers();
    console.log("response", result);
    return NextResponse.json({ message: "Hello from fakeUser", payload:result }, { status: 200 });
    
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const result = await createFakeUser(body);
    console.log(result);
    return NextResponse.json({ message: "ok" , status: 201 },{status: 201});
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });  
  }
}