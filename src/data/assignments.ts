import fs from "fs";
import path from "path";

export interface AssignmentFile {
  filename: string;
  displayName: string;
  size: number;
}

export function getAssignmentFiles(): AssignmentFile[] {
  const assignmentsDir = path.join(process.cwd(), "assignments");
  
  if (!fs.existsSync(assignmentsDir)) {
    return [];
  }

  const files = fs.readdirSync(assignmentsDir).filter((file) => 
    path.extname(file) === ".txt"
  );

  return files.map((filename) => {
    const filePath = path.join(assignmentsDir, filename);
    const stats = fs.statSync(filePath);
    const displayName = filename.replace(/\.txt$/, "").replace(/^\d+\.\s*/, "");
    
    return {
      filename,
      displayName,
      size: stats.size,
    };
  }).sort((a, b) => {
    // Sort by filename to maintain order
    return a.filename.localeCompare(b.filename);
  });
}

