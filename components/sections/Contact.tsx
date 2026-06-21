"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaDownload
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary">
          Get In Touch
        </h2>

        <p className="mt-10 text-xl text-muted-foreground font-bold leading-relaxed">
  Currently open to new opportunities and collaborations.
  Let's build something amazing together.
</p>

      
        {/* Social Links */}
<div className="mt-20 flex justify-center items-center gap-10">

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/divyagandham"
    target="_blank"
    className="
      text-[#0A66C2]
      transition-all duration-300
      hover:scale-110
      hover:-translate-y-1
    "
  >
    <FaLinkedin size={30} />
  </Link>

  {/* GitHub */}
  <Link
    href="https://github.com/divyagandham"
    target="_blank"
    className="
      text-black dark:text-white
      transition-all duration-300
      hover:scale-110
      hover:-translate-y-1
    "
  >
    <FaGithub size={30} />
  </Link>

  {/* Gmail */}
  <Link
    href="mailto:divyagandham28@gmail.com"
    className="
      text-[#EA4335]
      transition-all duration-300
      hover:scale-110
      hover:-translate-y-1
    "
  >
    <MdEmail size={30} />
  </Link>

  {/* WhatsApp */}
  <Link
    href="https://wa.me/917981025222"
    target="_blank"
    className="
      text-[#25D366]
      transition-all duration-300
      hover:scale-110
      hover:-translate-y-1
    "
  >
    <FaWhatsapp size={30} />
  </Link>

</div>

        {/* Divider */}
      <div className="mt-10 mx-auto w-70 border-t border-grey/10" />

        {/* Resume */}
<div className="mt-10">
  <Link
    href="/resume.pdf"
    target="_blank"
    className="
      inline-flex items-center gap-3
      text-l font-semibold
      hover:scale-105
      transition-all duration-300
    "
  >
    <FaDownload
      size={20}
      className="text-[#3B82F6]"
    />

    <span className="text-grey">
      View Resume
    </span>
  </Link>
</div>

      </div>
    </section>
  );
}