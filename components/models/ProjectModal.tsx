"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import {
  ExternalLink,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
        w-[92vw]
        max-w-6xl
        max-h-[85vh]
        overflow-y-auto
        p-0
        rounded-[32px]
      "
      >
        <div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

            <div>
              <h2 className="text-4xl font-bold">
                {project.title}
              </h2>

              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-10 p-8 lg:grid-cols-[350px_1fr]">

            {/* Left */}
            <div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.isMobileApp ? 170 : 600}
                  height={project.isMobileApp ? 170 : 400}
                  className="
                  rounded-[32px]
                  border border-white/10
                  shadow-[0_0_30px_rgba(139,92,246,.2)]
                "
              />
            </div>

              {/* Skills */}
              <div className="mt-8">

                <h3 className="text-lg font-semibold mb-4">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">

                  {project.skills.map((skill: string) => (
                    <div
                      key={skill}
                      className="
                        rounded-full
                        border
                        px-3
                        py-1
                        bg-orange-500/10
                        border-orange-500/20
                        text-orange-300
                        text-[11px]
                        font-medium
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </div>
                  ))}

                </div>

              </div>

              {/* Button */}
              <div className="mt-10">

              <div className="mt-8 flex flex-wrap gap-3">

                {/* Web project */}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="
                      inline-flex items-center justify-center
                      gap-2
                      rounded-xl
                      bg-primary
                      px-4 py-2
                      text-sm
                      font-semibold
                      text-primary-foreground
                      shadow-sm
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </Link>
                )}

                {/* Mobile App Links */}
                {project.playStoreUrl && (
                  <Link
                    href={project.playStoreUrl}
                    target="_blank"
                     className="
                      inline-flex items-center justify-center
                      gap-2
                      rounded-xl
                      bg-primary
                      px-4 py-2
                      text-sm
                      font-semibold
                      text-primary-foreground
                      shadow-sm
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <ExternalLink className="h-4 w-4" />
                    Google Play Store
                  </Link>
                )}

                {project.appStoreUrl && (
                  <Link
                    href={project.appStoreUrl}
                    target="_blank"
                    className="
                      inline-flex items-center justify-center
                      gap-2
                      rounded-xl
                      bg-primary
                      px-4 py-2
                      text-sm
                      font-semibold
                      text-primary-foreground
                      shadow-sm
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    <ExternalLink className="h-4 w-4" />
                    IOS App Store
                  </Link>
                )}

              </div>

              </div>

            </div>

            {/* Right */}
            <div className="space-y-10">

              {/* Overview */}
              <div>

                <h3 className="text-2xl font-bold">
                  Project Overview
                </h3>

                <div className="mt-5 space-y-3 text-muted-foreground">

                  {project.overview.map((item: string) => (
                    <div key={item}>
                      • {item}
                    </div>
                  ))}

                </div>

              </div>

              {/* Features + Achievements */}
              <div className="grid gap-10 md:grid-cols-2">

                {/* Features */}
                <div>

                  <h3 className="flex items-center gap-2 text-2xl font-bold">
                    <Sparkles className="text-primary h-5 w-5" />
                    Features
                  </h3>

                  <div className="mt-5 space-y-3">

                    {project.features.map((item: string) => (
                      <div
                        key={item}
                        className="text-muted-foreground"
                      >
                        • {item}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Achievements */}
                <div>

                  <h3 className="flex items-center gap-2 text-2xl font-bold">

                    <BadgeCheck className="h-5 w-5 text-green-400" />

                    Achievements

                  </h3>

                  <div className="mt-5 space-y-3">

                    {project.achievements.map((item: string) => (
                      <div
                        key={item}
                        className="text-green-400"
                      >
                        ✓ {item}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}