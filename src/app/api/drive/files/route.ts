import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { DRIVE_TOKEN } from "@/lib/drive-auth";

const UPLOADS_DIR = path.join(process.cwd(), "uploads");
const METADATA_FILE = path.join(UPLOADS_DIR, "metadata.json");

export interface FileMetadata {
  id: string;
  filename: string;
  originalName: string;
  size: number;
  uploadedAt: string;
  mimetype: string;
}

function ensureUploadsDir() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
}

export function getMetadata(): FileMetadata[] {
  ensureUploadsDir();
  if (!fs.existsSync(METADATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(METADATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function saveMetadata(metadata: FileMetadata[]) {
  ensureUploadsDir();
  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2));
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
