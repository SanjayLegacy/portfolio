"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 p-3 transition-colors duration-300 ${
        scrolled ? "bg-gray-300 text-black" : "bg-black text-white"
      }`}
    >
      <nav className="relative z-50 flex flex-row justify-center gap-x-8">
        <Link href="#about-me" className="line-clamp-1">
          About me
        </Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </div>
  );
}
