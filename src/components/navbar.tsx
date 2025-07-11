"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

export default function NavBar() {
  const ref = useRef<any>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, toggleMenu);

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
      <nav className="hidden md:flex relative z-50 flex-row justify-center gap-x-8">
        <Link href="#about-me">About me</Link>
        <Link href="#education">Education</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </nav>

      <div className="md:hidden flex items-center justify-end">
        <button
          onClick={toggleMenu}
          className={`p-2 focus:outline-none border rounded-md ${
            scrolled ? "border-black" : "border-white"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} ref={ref}>
        <div className="py-2">
          <Link
            href="#about-me"
            className="block py-2 px-4"
            onClick={toggleMenu}
          >
            About me
          </Link>
          <Link
            href="#education"
            className="block py-2 px-4"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            href="#experience"
            className="block py-2 px-4"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link href="#skills" className="block py-2 px-4" onClick={toggleMenu}>
            Skills
          </Link>
          <Link
            href="#projects"
            className="block py-2 px-4"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
