import fs from "fs";
import path from "path";

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
