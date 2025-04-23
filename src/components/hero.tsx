"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../public/Sanjay.png";

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Diagonal Background */}
      {/* Large Screen (Diagonal Split) */}
      <div className="hidden md:block absolute inset-0 bg-black" />
      <div className="hidden md:block absolute inset-0 bg-gray-300 clip-diagonal" />

      {/* Mobile (Diagonal Split) */}
      <div className="block md:hidden absolute inset-0 bg-black" />
      <div className="block md:hidden absolute inset-0 bg-gray-300 clip-diagonal-mobile" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 sm:flex-row flex-col">
        <div className="flex flex-col text-black sm:w-[50%] h-full justify-center space-y-4 w-full pl-10 sm:pl-20">
          <div className="text-3xl">{"Hi, I'm"}</div>
          <TypeAnimation
            sequence={[
              "Sanjay Senthil Kumar",
              1000,
              "Front End Developer",
              1000,
            ]}
            wrapper="span"
            speed={35}
            className="font-medium text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400 py-2"
            repeat={Infinity}
          />
          <div className="flex flex-row gap-x-4">
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              url="https://www.linkedin.com/in/sanjay-s-aa829518a/"
              style={{ height: 35, width: 35 }}
              className="hover:scale-110 duration-300"
            />
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              url="https://github.com/SanjayLegacy"
              style={{ height: 35, width: 35 }}
              className="hover:scale-110 duration-300"
            />
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              url="mailto:sanjaysenthilkumar2499@gmail.com"
              style={{ height: 35, width: 35 }}
              className="hover:scale-110 duration-300"
            />
          </div>
        </div>
        <div className="w-full sm:w-[50%] h-full overflow-hidden flex justify-center">
          <Image src={profilePic} alt="Sanjay" className="h-full w-fit" />
        </div>
      </div>
    </div>
  );
}
