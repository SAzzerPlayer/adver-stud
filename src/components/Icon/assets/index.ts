import facebook from "./facebook";
import heart from "./heart";
import instagram from "./instagram";
import star from "./star";
import telegram from "./telegram";
import { TIconComponent } from "../types";

const assets = {
  facebook,
  heart,
  instagram,
  star,
  telegram,
};

export type TIconName = keyof typeof assets;

export default assets as Record<TIconName, TIconComponent>;
