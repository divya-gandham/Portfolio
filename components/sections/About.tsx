import {
  BriefcaseBusiness,
  Landmark,
  Users,
  Globe,
  Smartphone,
  Zap,
  UserRound,
  Sparkles
} from "lucide-react";


export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">

          {/* Left Side */}
          <div className="space-y-8">

            {/* About Me */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <UserRound className="h-6 w-6 text-violet-500" />
                <h3 className="text-3xl font-bold">
                  Who I Am
                </h3>
              </div>

              <p className="text-base leading-9 text-muted-foreground">
                I'm a{" "}
                <span className="font-semibold text-primary">
                  React Native and Full Stack Developer
                </span>{" "}
                with over 3 years of experience building scalable mobile and web
                applications. I specialize in creating high-performance solutions with
                a strong focus on clean architecture, maintainability, and seamless
                user experiences.
              </p>
            </div>

            {/* Current Work */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-violet-500" />
                <h3 className="text-2xl font-bold">
                  Current Work
                </h3>
              </div>

              <p className="text-base leading-8 text-muted-foreground">
                Currently working at{" "}
                <span className="font-semibold text-primary">
                  Comviva Technologies
                </span>
                , contributing to the MTN MoMo platform and developing secure fintech
                solutions used by millions of users across multiple African markets.
              </p>
            </div>

            {/* What Drives Me */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-violet-500" />
                <h3 className="text-2xl font-bold">
                  What Drives Me
                </h3>
              </div>

              <p className="text-base leading-8 text-muted-foreground">
                I'm passionate about solving challenging problems, improving application
                performance, and building reusable solutions that deliver seamless user
                experiences. I also enjoy exploring AI-assisted development and continuously
                learning modern technologies.
              </p>
            </div>
          </div>


          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">

            {/* What I'm Building */}
            <div
              className="
      col-span-2
      rounded-3xl
      border
      bg-card/50
      backdrop-blur-xl
      p-6
      transition-all duration-300
      hover:border-primary/40
    "
            >
              <p className="text-sm text-muted-foreground">
                🚀 Current Product
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                MTN MoMo Platform
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Building secure fintech solutions used across multiple African markets,
                delivering seamless experiences for millions of users.
              </p>
            </div>

            {/* Experience */}
            <div
              className="
      rounded-3xl
      border
      bg-card/50
      p-6
      transition-all duration-300
      hover:border-primary/40
      hover:-translate-y-1
    "
            >
              <h3 className="text-4xl font-bold text-primary">
                3+
              </h3>

              <p className="mt-2 text-muted-foreground">
                Years Experience
              </p>
            </div>

            {/* Users */}
            <div
              className="
      rounded-3xl
      border
      bg-card/50
      p-6
      transition-all duration-300
      hover:border-primary/40
      hover:-translate-y-1
    "
            >
              <h3 className="text-4xl font-bold text-primary">
                2M+
              </h3>

              <p className="mt-2 text-muted-foreground">
                Users Served
              </p>
            </div>

            {/* Markets */}
            <div
              className="
      rounded-3xl
      border
      bg-card/50
      p-6
      transition-all duration-300
      hover:border-primary/40
      hover:-translate-y-1
    "
            >
              <h3 className="text-4xl font-bold text-primary">
                5
              </h3>

              <p className="mt-2 text-muted-foreground">
                African Markets
              </p>
            </div>

            {/* Expertise */}
            <div
              className="
      rounded-3xl
      border
      bg-card/50
      p-6
      transition-all duration-300
      hover:border-primary/40
      hover:-translate-y-1
    "
            >
              <h3 className="text-2xl font-bold">
                React Native
              </h3>

              <p className="mt-2 text-muted-foreground">
                Cross-Platform Development
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

