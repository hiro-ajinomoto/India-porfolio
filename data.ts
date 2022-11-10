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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "handle database , server, api using <b>Express </b>",
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
    name: "Node",
    level: "30%",
    Icon: BsCircleFill,
  },
  {
    name: "Html/css",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Next",
    level: "80%",
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
    level: "50%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Jira clone",
    description:
      "This is a clone of jira website which consists of functions such as creating projects, drag and drop tasks, comments ...",
    image_path: "/../public/jira_clone.png",
    deployed_url: "https://wooden-letters.surge.sh/",
    github__url: "",
    category: ["react"],
    key_techs: [
      "React",
      "redux-saga",
      "ant-design",
      "Bootstrap",
      "react DnD",
      "Formik and yup",
    ],
  },
  {
    name: "Movie website",
    description:
      "This website helps users to book movies, help admins to upload , delete, update movies, more and more ...",
    image_path: "/../public/2.png",
    deployed_url: "https://cold-burn.surge.sh/",
    github__url: "",
    category: ["react"],
    key_techs: ["React", "redux-thunk", "ant-design"],
  },
  {
    name: "Datbike homepage",
    description: "This is a copy of Datbike homepage",
    image_path: "/../public/dat_bike.png",
    deployed_url: "https://datbikee.surge.sh/",
    github__url: "",
    category: ["react"],
    key_techs: ["React", "React-spring"],
  },
];
