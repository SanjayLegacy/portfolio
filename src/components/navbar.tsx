import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 p-3 backdrop-blur-md">
      <nav className="relative z-50 flex flex-row justify-center gap-x-8">
        <Link href="#about-me">About me</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </nav>
    </div>
  );
}
