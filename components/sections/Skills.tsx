"use client";

import { skillsData } from "@/data/portfolio";
import { useTheme } from "next-themes";
import React from "react";

interface SkillItemProps {
  skill: {
    name: string;
    icon: React.ComponentType<any>;
    color: string;
    dark_color?: string;
    light_color?: string;
  };
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const IconComponent = skill.icon;
  const { theme } = useTheme();

  return (
    <div
      className="
      flex items-center gap-2.5
      px-5 py-2
      mx-4
      group
      transition-all duration-300
      hover:scale-105
    "
    >
      <IconComponent
        className="
          text-xl
          group-hover:scale-110
          transition-transform duration-300
        "
        style={{
          color:
            theme === "dark"
              ? skill.dark_color || skill.color
              : skill.light_color || skill.color,
        }}
      />

      <span className="text-[15px] font-semibold whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};

export function Skills() {
  const row1 = [
    ...skillsData.row1,
    ...skillsData.row1,
    ...skillsData.row1,
    ...skillsData.row1,
  ];

  const row2 = [
    ...skillsData.row2,
    ...skillsData.row2,
    ...skillsData.row2,
    ...skillsData.row2,
  ];

  const row3 = [
    ...skillsData.row3,
    ...skillsData.row3,
    ...skillsData.row3,
    ...skillsData.row3,
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">

        <div className="space-y-10">

          {/* Row 1 */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll-right">
              {row1.map((skill, index) => (
                <SkillItem
                  key={`row1-${index}`}
                  skill={skill}
                />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll-left">
              {row2.map((skill, index) => (
                <SkillItem
                  key={`row2-${index}`}
                  skill={skill}
                />
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll-right-slow">
              {row3.map((skill, index) => (
                <SkillItem
                  key={`row3-${index}`}
                  skill={skill}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}