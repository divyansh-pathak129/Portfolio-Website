import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DRIVE_TOKEN } from "@/lib/drive-auth";
import { getMetadata, saveMetadata } from "@/lib/drive-metadata";

const UPLOADS_DIR = path.join(process.cwd(), "uploads");

function isAuthenticated(request: NextRequest): boolean {
  const auth = request.headers.get("Authorization");
  return auth === `Bearer ${DRIVE_TOKEN}`;
}

function isSafeFilename(filename: string): boolean {
  return !filename.includes("..") && !filename.includes("/") && !filename.includes("\\");
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = decodeURIComponent(params.filename);

  if (!isSafeFilename(filename)) {
    return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
  }

  const filepath = path.join(UPLOADS_DIR, filename);

  if (!fs.existsSync(filepath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const metadata = getMetadata();
  const fileMeta = metadata.find((f) => f.filename === filename);
  const originalName = fileMeta?.originalName ?? filename;

  const buffer = fs.readFileSync(filepath);
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": fileMeta?.mimetype ?? "application/octet-stream",
      "Content-Disposition": `attachment; filename="${originalName}"`,
    },
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const filename = decodeURIComponent(params.filename);

  if (!isSafeFilename(filename)) {
    return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
  }

  const filepath = path.join(UPLOADS_DIR, filename);

  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }

  const metadata = getMetadata();
  const updated = metadata.filter((f) => f.filename !== filename);
  saveMetadata(updated);

  return NextResponse.json({ success: true });
}
