import Image from "next/image";
import Link from "next/link";
import ExpressJS from "../../public/express.svg";
import GitHub from "../../public/github.svg";
import NeonDB from "../../public/neondb.svg";
import React from "../../public/react.svg";
import ReduxToolkit from "../../public/redux.svg";
import Tailwind from "../../public/tailwind.svg";
import TypeScript from "../../public/typescript.svg";
import JavaScript from "../../public/javascript.svg";

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
      description: "A real estate rental application",
      techStack: [React, TypeScript, Tailwind, JavaScript, ExpressJS, NeonDB],
      link: "https://rentify-client-lake.vercel.app/",
      githubClientLink: "https://github.com/SanjayLegacy/rentify-client",
      githubServerLink: "https://github.com/SanjayLegacy/rentify-server",
    },
    {
      name: "SpaceX",
      description:
        "SpaceX UI developed using React, Redux Toolkit and Tailwind CSS, for data SpaceX API is used.",
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
                <div className="font-medium text-xl">{project.name}</div>
                <div className="font-light">{project.description}</div>
                <div className="font-medium text-lg">Tech Stack</div>
                <div className="flex flex-row gap-x-6">
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
                <div className="font-medium text-lg">Github</div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-x-8">
                    {project.githubClientLink ? (
                      <Link
                        href={project.githubClientLink}
                        className="flex flex-row items-center gap-x-2 hover:scale-110 duration-300"
                      >
                        <Image
                          src={GitHub}
                          alt={"github"}
                          width={30}
                          height={30}
                        />
                        <div>Client</div>
                      </Link>
                    ) : null}
                    {project.githubServerLink ? (
                      <Link
                        href={project.githubServerLink}
                        className="flex flex-row items-center gap-x-2 hover:scale-110 duration-300"
                      >
                        <Image
                          src={GitHub}
                          alt={"github"}
                          width={30}
                          height={30}
                        />
                        <div>Server</div>
                      </Link>
                    ) : null}
                  </div>
                  <Link
                    href={project.link}
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
