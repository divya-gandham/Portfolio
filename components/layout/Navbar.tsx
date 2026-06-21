"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

const navItems = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex sticky top-5 z-50 justify-center px-6">
        <div
          className="
            w-full max-w-6xl
            px-8 py-3
            rounded-2xl
            border border-border
            bg-background/70
            backdrop-blur-xl
            shadow-lg
          "
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home">
              <div
                className="
                  h-10 w-10
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500
                  flex items-center justify-center
                  font-bold
                  text-white
                  shadow-[0_0_20px_rgba(139,92,246,.4)]
                "
              >
                DG
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`#${item.href}`}
                  className={`
                    px-5 py-3
                    text-sm font-medium
                    rounded-xl
                    border border-transparent
                    transition-all duration-300
                    ${
                      activeSection === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }
                    hover:text-primary
                    hover:border-primary/20
                    hover:bg-accent
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-5 right-5 z-50">
        <ThemeToggle />
      </header>
    </>
  );
}