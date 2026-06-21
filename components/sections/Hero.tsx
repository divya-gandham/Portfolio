import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  DollarSign,
  Globe,
  Smartphone,
  Landmark,
  Layers3,
  BadgeCheck,
  Zap,
} from "lucide-react";


const highlights = [
  {
    label: "3+ Years Experience",
    icon: Briefcase,
  },
  {
    label: "Senior Software Engineer",
    icon: BadgeCheck,
  },
  {
    label: "2M+ Users Served",
    icon: Users,
  },
  {
    label: "$50M+ Transactions",
    icon: DollarSign,
  },
  {
    label: "7 African Markets",
    icon: Globe,
  },
  {
    label: "React Native Specialist",
    icon: Smartphone,
  },
  {
    label: "Cross-Platform Development",
    icon: Layers3,
  },
  {
    label: "App Store & Play Store Published",
    icon: BadgeCheck,
  },
  {
    label: "Performance Optimization",
    icon: Zap,
  },
];

export function Hero() {
  return (
    <section
      id="home"
     className="
    flex
    min-h-[85vh]
    items-center
    justify-center
    px-4 md:px-8
    pt-24 md:pt-0
  "
    >
      <div className="max-w-5xl text-center space-y-10">

        {/* Intro */}
        <div className="space-y-5">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"> <span className="text-foreground"> Hi, I&apos;m{" "} </span> <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent"> Divya Gandham </span> </h1>

          <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Full Stack Developer • Mobile Application Developer
          </p>
        </div>

        {/* Skill Chips */}
        <div className="flex flex-wrap justify-center gap-4">
  {highlights.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.label}
        className="
          flex items-center gap-2
          rounded-full
          border border-primary/20
          bg-card/60
          px-5 py-2
          text-sm font-semibold
          text-primary
          backdrop-blur-md
          transition-all duration-300
          hover:scale-105
        "
      >
        <Icon className="h-4 w-4" />
        {item.label}
      </div>
    );
  })}
</div>

        {/* Button */}
        <div>
          <Link
            href="#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View My Work

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
