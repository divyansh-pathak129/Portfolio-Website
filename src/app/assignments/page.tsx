import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { getAssignmentFiles } from "@/data/assignments";
import { Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Assignments",
  description: "Download my assignment files",
  openGraph: {
    title: `Assignments | ${DATA.name}`,
    description: "Download my assignment files",
    url: `${DATA.url}/assignments`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Assignments | ${DATA.name}`,
    description: "Download my assignment files",
  },
};

const BLUR_FADE_DELAY = 0.04;

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
}

export default async function AssignmentsPage() {
  const files = getAssignmentFiles();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-8 space-y-2">
          <h1 className="font-medium text-2xl tracking-tighter">Assignments</h1>
          <p className="text-muted-foreground">
            Download my assignment files below.
          </p>
        </div>
      </BlurFade>

      {files.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground">No assignment files found.</p>
        </BlurFade>
      ) : (
        <div className="space-y-4">
          {files.map((file, id) => (
            <BlurFade
              key={file.filename}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{file.displayName}</CardTitle>
                  <CardDescription>
                    {file.filename} • {formatFileSize(file.size)}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={`/api/assignments/${encodeURIComponent(file.filename)}`}
                      download={file.filename}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
        </div>
      )}
    </section>
  );
}

