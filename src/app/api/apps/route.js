import { NextRequest, NextResponse } from "next/server";
import { getAllApps, getAppsByDev, getAppsByUser } from "@/Service/apps.service";
//In case fails to connect

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rahumatic87';

// flush privileges;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const dev = searchParams.get("dev");
    const user_id = searchParams.get("user");
    if (dev) {
      const result = await getAppsByDev(dev);
      return NextResponse.json({ message: "Success", payload: result }, { status: 200 });
    }
    else if (user_id) {
      const result = await getAppsByUser(user_id);
      return NextResponse.json({ message: "Success", payload: result }, { status: 200 });
    }
    else {
      const result = await getAllApps("admin");
      return NextResponse.json({ message: "Success", payload: result }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching apps:", error);
    return NextResponse.json({ message: "Error", payload: error }, { status: 500 });
  }
}
