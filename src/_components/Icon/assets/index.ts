import close from "./close";
import facebook from "./facebook";
import heart from "./heart";
import info from "./info";
import instagram from "./instagram";
import linkArrow from "./linkArrow";
import menu from "./menu";
import star from "./star";
import telegram from "./telegram";
import { TIconComponent } from "../types";

const assets = {
  close,
  facebook,
  heart,
  info,
  instagram,
  linkArrow,
  menu,
  star,
  telegram,
};

export type TIconName = keyof typeof assets;

export default assets as Record<TIconName, TIconComponent>;
