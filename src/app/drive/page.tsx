"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Download,
  Trash2,
  Upload,
  LogOut,
  HardDrive,
  File,
  FileText,
  FileImage,
  FileArchive,
  Loader2,
  CloudUpload,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FileMetadata {
  id: string;
  filename: string;
  originalName: string;
  size: number;
  uploadedAt: string;
  mimetype: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function FileIcon({ mimetype, filename }: { mimetype: string; filename: string }) {
  const isImage =
    mimetype.startsWith("image/") ||
    /\.(png|jpe?g|gif|webp|svg)$/i.test(filename);
  const isPdf =
    mimetype === "application/pdf" || filename.toLowerCase().endsWith(".pdf");
  const isZip = /\.(zip|tar|gz|rar|7z)$/i.test(filename);

  const Icon = isImage ? FileImage : isPdf ? FileText : isZip ? FileArchive : File;
  return <Icon className="size-5 shrink-0 text-muted-foreground" />;
}

function getExtColor(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, string> = {
    pdf: "bg-red-500/10 text-red-600 dark:text-red-400",
    png: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    jpg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    jpeg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    doc: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    docx: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    txt: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
    zip: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  };
  return map[ext] ?? "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400";
}

export default function DrivePage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("drive-token");
    if (!saved) {
      router.replace("/drive/login");
      return;
    }
    setToken(saved);
    fetchFiles().finally(() => setLoading(false));
  }, [router]);

  const fetchFiles = useCallback(async () => {
    const res = await fetch("/api/drive/files");
    if (res.ok) setFiles(await res.json());
  }, []);

  const uploadFile = useCallback(
    async (file: File) => {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/drive/files", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (res.ok) await fetchFiles();
      setUploading(false);
    },
    [token, fetchFiles]
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) await uploadFile(file);
    e.target.value = "";
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) await uploadFile(file);
  };

  const handleDelete = async (filename: string) => {
    setDeleting(filename);
    await fetch(`/api/drive/files/${encodeURIComponent(filename)}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    await fetchFiles();
    setDeleting(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("drive-token");
    router.replace("/drive/login");
  };

  const totalSize = files.reduce((acc, f) => acc + f.size, 0);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] pb-24">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl border bg-card shadow-sm">
            <HardDrive className="size-4" />
          </div>
          <div>
            <h1 className="font-semibold text-base leading-none">Drive</h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {files.length} file{files.length !== 1 ? "s" : ""}{" "}
              {files.length > 0 && `· ${formatBytes(totalSize)} total`}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <LogOut className="size-3.5" />
          Sign out
        </button>
      </div>

      {/* Upload zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={cn(
          "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center cursor-pointer transition-all duration-200 mb-8",
          dragOver
            ? "border-foreground bg-accent scale-[1.01]"
            : "border-border hover:border-foreground/40 hover:bg-accent/40"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
        />
        {uploading ? (
          <>
            <Loader2 className="size-8 animate-spin text-muted-foreground mb-3" />
            <p className="text-sm font-medium">Uploading…</p>
          </>
        ) : (
          <>
            <CloudUpload
              className={cn(
                "size-8 mb-3 transition-colors",
                dragOver ? "text-foreground" : "text-muted-foreground"
              )}
            />
            <p className="text-sm font-medium">
              {dragOver ? "Drop to upload" : "Drop files here or click to upload"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PDF, images, documents, zip — any file
            </p>
          </>
        )}
      </div>

      {/* File list */}
      {files.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <File className="size-10 text-muted-foreground/30 mb-3" />
          <p className="text-sm font-medium text-muted-foreground">No files yet</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Upload something using the area above
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {files.map((file) => {
            const ext = file.originalName.split(".").pop()?.toUpperCase() ?? "FILE";
            return (
              <div
                key={file.id}
                className="group flex items-center gap-4 rounded-xl border bg-card px-4 py-3.5 hover:bg-accent/50 transition-colors"
              >
                {/* Icon */}
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background">
                  <FileIcon mimetype={file.mimetype} filename={file.originalName} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.originalName}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatBytes(file.size)} · {formatDate(file.uploadedAt)}
                  </p>
                </div>

                {/* Badge */}
                <span
                  className={cn(
                    "hidden sm:inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider shrink-0",
                    getExtColor(file.originalName)
                  )}
                >
                  {ext}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <Link
                    href={`/api/drive/files/${encodeURIComponent(file.filename)}`}
                    download={file.originalName}
                    className="flex size-8 items-center justify-center rounded-lg border bg-background hover:bg-accent transition-colors"
                    title="Download"
                  >
                    <Download className="size-3.5 text-muted-foreground" />
                  </Link>
                  <button
                    onClick={() => handleDelete(file.filename)}
                    disabled={deleting === file.filename}
                    className="flex size-8 items-center justify-center rounded-lg border bg-background hover:bg-red-500/10 hover:border-red-500/30 transition-colors disabled:opacity-40"
                    title="Delete"
                  >
                    {deleting === file.filename ? (
                      <Loader2 className="size-3.5 animate-spin text-muted-foreground" />
                    ) : (
                      <Trash2 className="size-3.5 text-muted-foreground hover:text-red-500" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
