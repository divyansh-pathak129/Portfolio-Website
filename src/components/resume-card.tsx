"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: string[] | readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative">
      {/* Entire card links to the company href */}
      <Link
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="flex hover:bg-accent/40 transition-colors">
          <div className="flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-grow ml-4 flex-col group">
            <CardHeader className={description ? "pr-10" : undefined}>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {badges && badges.length > 0 && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
          </div>
        </Card>
      </Link>

      {/* Chevron button — stops propagation so it doesn't trigger the link */}
      {description && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="absolute right-3 top-4 z-10 flex size-6 items-center justify-center rounded-md hover:bg-accent transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <ChevronRightIcon
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-300",
              isExpanded ? "rotate-90" : "rotate-0"
            )}
          />
        </button>
      )}

      {/* Expandable description */}
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden px-4 text-xs sm:text-sm text-muted-foreground"
        >
          <div className="pb-3 pt-1">{description}</div>
        </motion.div>
      )}
    </div>
  );
};
