import Image from "next/image";
import Link from "next/link";
import ExpressJS from "../../public/express.svg";
import GitHub from "../../public/github.svg";
import NeonDB from "../../public/neondb.svg";
import React from "../../public/react.svg";
import ReduxToolkit from "../../public/redux.svg";
import Tailwind from "../../public/tailwind.svg";
import TypeScript from "../../public/typescript.svg";

interface ProjectsDataType {
  name: string;
  description: string;
  techStack: any[];
  link: string;
  githubClientLink?: string;
  githubServerLink?: string;
}

export default function Projects() {
  const myProjects: ProjectsDataType[] = [
    {
      name: "Rentify",
      description:
        "A real estate rental application, Where It enables property listing, searching with a simple interface. Optimized for smooth navigation and dynamic data handling. Secure authentication ensures reliability for users.",
      techStack: [React, TypeScript, Tailwind, ReduxToolkit, ExpressJS, NeonDB],
      link: "https://rentify-client-lake.vercel.app/",
      githubClientLink: "https://github.com/SanjayLegacy/rentify-client",
      githubServerLink: "https://github.com/SanjayLegacy/rentify-server",
    },
    {
      name: "SpaceX",
      description:
        "A SpaceX website clone built using its API for data. It showcases launches, rockets, and missions with a dynamic UI. Optimized for speed, responsiveness, and smooth navigation. Provides an interactive experience with live mission tracking.",
      techStack: [React, TypeScript, Tailwind, ReduxToolkit],
      link: "https://spacex-stratforge.vercel.app/",
      githubClientLink: "https://github.com/SanjayLegacy/spacex-stratforge",
    },
  ];

  return (
    <div
      id="projects"
      className="p-4 flex flex-col justify-center items-center bg-gray-300 gap-y-8 pt-16"
    >
      <div className="text-xl sm:text-2xl text-black font-semibold border-4 border-black p-2">
        Projects
      </div>
      <div className="sm:w-[50%] w-[90%]">
        <div className="flex flex-col gap-y-4 text-black">
          {myProjects.map((project, projectIdx) => {
            return (
              <div
                key={projectIdx}
                className="flex flex-col gap-y-2 border border-gray-600 py-2 px-4 rounded-lg"
              >
                <div className="font-medium text-xl self-center">
                  {project.name}
                </div>
                <div className="font-light text-justify">
                  {project.description}
                </div>
                <div className="font-medium text-lg self-center">
                  Tech Stack
                </div>
                <div className="flex flex-row gap-x-6 self-center">
                  {project.techStack.map((tech, techIdx) => {
                    return (
                      <Image
                        key={techIdx}
                        src={tech}
                        alt={"tech"}
                        width={30}
                        height={30}
                        className="hover:scale-125 duration-300"
                      />
                    );
                  })}
                </div>
                <div className="font-medium text-lg self-center">Github</div>
                <div className="flex flex-row items-center gap-x-8 self-center">
                  <div className="flex flex-row items-center gap-x-8">
                    {project.githubClientLink ? (
                      <Link
                        href={project.githubClientLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-x-2 hover:scale-110 duration-300"
                      >
                        <Image
                          src={GitHub}
                          alt={"github"}
                          width={30}
                          height={30}
                        />
                        <div>Frontend</div>
                      </Link>
                    ) : null}
                    {project.githubServerLink ? (
                      <Link
                        href={project.githubServerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-x-2 hover:scale-110 duration-300"
                      >
                        <Image
                          src={GitHub}
                          alt={"github"}
                          width={30}
                          height={30}
                        />
                        <div>Backend</div>
                      </Link>
                    ) : null}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline w-fit"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
