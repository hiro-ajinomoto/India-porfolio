import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface ISkills {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github__url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node";
