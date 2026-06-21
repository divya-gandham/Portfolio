"use client";

import { useState } from "react";
import Image from "next/image";

import { projectsData } from "@/data/portfolio";
import { ProjectModal } from "../models/ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="
                  group
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-border
                  bg-card
                  shadow-sm
                  transition-all duration-500
                  hover:border-primary/30
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(217,70,239,0.12)]
"
            >

              {/* Image */}
              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  rounded-t-[32px]
                  bg-card
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    object-top
                    transition-all duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-5">

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-muted-foreground
                        line-clamp-2
                      "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 6).map((skill) => (
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

                {/* Status + View */}
                <div className="flex items-center justify-between pt-2">

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedProject(null);
            }
          }}
        />

      </div>
    </section>
  );
}