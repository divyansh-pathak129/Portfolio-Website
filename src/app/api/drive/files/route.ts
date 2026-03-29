import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DRIVE_TOKEN } from "@/lib/drive-auth";
import { getMetadata, saveMetadata, FileMetadata } from "@/lib/drive-metadata";

const UPLOADS_DIR = path.join(process.cwd(), "uploads");

function ensureUploadsDir() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
}

function isAuthenticated(request: NextRequest): boolean {
  const auth = request.headers.get("Authorization");
  return auth === `Bearer ${DRIVE_TOKEN}`;
}

export async function GET() {
  const metadata = getMetadata();
  return NextResponse.json(metadata);
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  ensureUploadsDir();

  const id = crypto.randomUUID();
  const ext = path.extname(file.name);
  const storedFilename = `${id}${ext}`;
  const filepath = path.join(UPLOADS_DIR, storedFilename);

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filepath, buffer);

  const newFile: FileMetadata = {
    id,
    filename: storedFilename,
    originalName: file.name,
    size: file.size,
    uploadedAt: new Date().toISOString(),
    mimetype: file.type || "application/octet-stream",
  };

  const metadata = getMetadata();
  metadata.push(newFile);
  saveMetadata(metadata);

  return NextResponse.json(newFile);
}
