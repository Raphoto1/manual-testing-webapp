//imports de app
import { createQuestion } from "@/Service/questions.service";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from questions" });
}

export async function POST(request) {
  try {
    const capturedForm = await request.formData();
    console.log("Captured Form Data:", capturedForm);
    
    const result = await createQuestion(capturedForm);
    return NextResponse.json({ message: result, status: 201 }, { status: 201 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
