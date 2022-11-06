import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { FunctionComponent } from "react";
import { IProject, ISkills, Service } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkills[] = [
  {
    name: "Javascript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Typescript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Nodejs",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "Html/css",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkills[] = [
  {
    name: "Figma",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Dev talks React",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/200",
    github__url: "https://picsum.photos/250/200",
    category: ["react"],
    key_techs: ["React", "Typescript", "Material UI"],
  },
  {
    name: "Covid tracker Node",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["node"],
    key_techs: ["React", "Typescript"],
  },
  {
    name: "Covid tracker - react",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["react"],
    key_techs: ["React", "Typescript"],
  },
  {
    name: "Vim clear scence React",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["react"],
    key_techs: ["React", "Typescript"],
  },
  {
    name: "Covid tracker",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["react"],
    key_techs: ["React", "Typescript"],
  },
  {
    name: "Covid tracker",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["node"],
    key_techs: ["React", "Typescript"],
  },
  {
    name: "Covid tracker",
    description: "Lorem ispum sit on the chair",
    image_path: "https://picsum.photos/250/200",
    deployed_url: "https://picsum.photos/250/300",
    github__url: "https://picsum.photos/250/300",
    category: ["node"],
    key_techs: ["React", "Typescript"],
  },
];
