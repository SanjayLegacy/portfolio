import Image from "next/image";
import Bitbucket from "../../public/bitbucket.svg";
import Dart from "../../public/dart.svg";
import ExpressJS from "../../public/express.svg";
import Figma from "../../public/figma.svg";
import Flutter from "../../public/flutter.svg";
import Git from "../../public/git.svg";
import GitHub from "../../public/github.svg";
import JavaScript from "../../public/javascript.svg";
import Jira from "../../public/jira.svg";
import MySql from "../../public/mysql.svg";
import NestJS from "../../public/nestjs.svg";
import NextJS from "../../public/nextjs.svg";
import NodeJS from "../../public/node.svg";
import PostgreSQL from "../../public/postgresql.svg";
import Postman from "../../public/postman.svg";
import React from "../../public/react.svg";
import ReactNative from "../../public/reactnative.svg";
import ReduxToolkit from "../../public/redux.svg";
import Slack from "../../public/slack.svg";
import Tailwind from "../../public/tailwind.svg";
import TypeScript from "../../public/typescript.svg";
import Vite from "../../public/vite.svg";

interface SkillsDataType {
  name: string;
  logo: any;
}

export default function Skills() {
  const mySkills: SkillsDataType[] = [
    {
      name: "ReactJS",
      logo: React,
    },
    {
      name: "TypeScript",
      logo: TypeScript,
    },
    {
      name: "NodeJS",
      logo: NodeJS,
    },
    {
      name: "ExpressJS",
      logo: ExpressJS,
    },
    {
      name: "NextJS",
      logo: NextJS,
    },
    {
      name: "JavaScript",
      logo: JavaScript,
    },
    {
      name: "Tailwind CSS",
      logo: Tailwind,
    },
    {
      name: "Redux Toolkit",
      logo: ReduxToolkit,
    },
    {
      name: "MySql",
      logo: MySql,
    },
    {
      name: "Postgresql",
      logo: PostgreSQL,
    },
    {
      name: "Git",
      logo: Git,
    },
    {
      name: "GitHub",
      logo: GitHub,
    },
    {
      name: "Jira",
      logo: Jira,
    },
    {
      name: "Bitbucket",
      logo: Bitbucket,
    },
    {
      name: "Slack",
      logo: Slack,
    },
    {
      name: "Vite",
      logo: Vite,
    },
    {
      name: "NestJS",
      logo: NestJS,
    },
    {
      name: "Postman",
      logo: Postman,
    },
    {
      name: "Figma",
      logo: Figma,
    },
    {
      name: "Flutter",
      logo: Flutter,
    },
    {
      name: "Dart",
      logo: Dart,
    },
    {
      name: "React Native",
      logo: ReactNative,
    },
  ];

  return (
    <div
      id="skills"
      className="p-4 flex flex-col justify-center items-center bg-gray-300 gap-y-8"
    >
      <div className="text-xl sm:text-2xl text-black font-semibold border-4 border-black p-2">
        Skills
      </div>
      {/* <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 sm:w-[50%] w-[90%] justify-center items-baseline"> */}
      <div className="sm:w-[50%] w-[90%] grid grid-cols-2 sm:grid-cols-4 justify-center items-baseline gap-8">
        {mySkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-y-4 hover:scale-110 duration-300"
          >
            <Image src={skill.logo} alt={skill.name} width={50} height={50} />
            <div className="text-base text-black">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
