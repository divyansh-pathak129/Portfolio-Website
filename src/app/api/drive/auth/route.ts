import { NextRequest, NextResponse } from "next/server";
import { DRIVE_CREDENTIALS, DRIVE_TOKEN } from "@/lib/drive-auth";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (
    username === DRIVE_CREDENTIALS.username &&
    password === DRIVE_CREDENTIALS.password
  ) {
    return NextResponse.json({ token: DRIVE_TOKEN });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
