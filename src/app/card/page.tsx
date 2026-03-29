import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Card | ${DATA.name}`,
  description: `Links & profiles for ${DATA.name}`,
};

const BLUR_FADE_DELAY = 0.04;

export default function CardPage() {
  const currentWork = DATA.work.filter((w) => w.end === "Present");
  const socialLinks = Object.entries(DATA.contact.social);

  return (
    <main className="flex flex-col items-center min-h-[100dvh] py-12 pb-24 space-y-8 max-w-sm mx-auto">
      {/* Avatar + Name */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center space-y-3 text-center">
          <Avatar className="size-24 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">{DATA.name}</h1>
            <p className="text-sm text-muted-foreground">{DATA.location}</p>
            <p className="text-sm text-muted-foreground max-w-[260px]">
              {DATA.description}
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Currently Building */}
      <BlurFade delay={BLUR_FADE_DELAY * 3} className="w-full">
        <div className="space-y-2 w-full">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground text-center mb-3">
            Currently Building
          </p>
          {currentWork.map((work, i) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 4 + i * 0.05}
            >
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-3 rounded-xl border bg-card hover:bg-accent transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-lg border">
                    <AvatarImage src={work.logoUrl} alt={work.company} className="object-cover" />
                    <AvatarFallback className="rounded-lg text-xs">{work.company[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{work.company}</p>
                    <p className="text-xs text-muted-foreground">{work.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-[10px]">
                    Live
                  </Badge>
                  <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </BlurFade>

      {/* Socials */}
      <BlurFade delay={BLUR_FADE_DELAY * 7} className="w-full">
        <div className="space-y-2 w-full">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground text-center mb-3">
            Connect
          </p>
          {socialLinks.map(([name, social], i) => (
            <BlurFade
              key={name}
              delay={BLUR_FADE_DELAY * 8 + i * 0.05}
            >
              <Link
                href={social.url}
                target={name !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-3 rounded-xl border bg-card hover:bg-accent transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <social.icon className="size-5 shrink-0" />
                  <span className="font-medium text-sm">{social.name}</span>
                </div>
                <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </BlurFade>
          ))}
        </div>
      </BlurFade>

      {/* Portfolio Link */}
      <BlurFade delay={BLUR_FADE_DELAY * 12} className="w-full">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border border-dashed text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-sm"
        >
          View Full Portfolio →
        </Link>
      </BlurFade>
    </main>
  );
}
