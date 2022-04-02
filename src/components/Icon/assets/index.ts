import facebook from "./facebook";
import instagram from "./instagram";
import telegram from "./telegram";
import { TIconComponent } from "../types";

const assets = {
  facebook,
  instagram,
  telegram,
};

export type TIconName = keyof typeof assets;

export default assets as Record<TIconName, TIconComponent>;
