import Link from "next/link";
import Image from "next/image";
import DoubleArrow from "../../public/double-arrow.svg";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-4 gap-y-4">
      <Link
        href="#"
        className="flex flex-col gap-y-1 cursor-pointer justify-center items-center"
      >
        <Image
          src={DoubleArrow}
          alt="Double Arrow"
          unoptimized
          className="animate-bounce w-6 h-6"
        />
        <div className="text-base">Back to top</div>
      </Link>
      <div className="flex flex-row items-center gap-x-2 text-sm">
        <div className="font-medium">@2025 Sanjay Senthil Kumar</div>
        <div className="font-light">All rights reserved.</div>
      </div>
    </div>
  );
}
