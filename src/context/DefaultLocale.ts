import React from "react";
import { TLocale } from "../types";

export type TDefaultLocaleContext = TLocale & { currentPageLocale: string };

export const baseDefaultLocaleContext: TDefaultLocaleContext = {
  default: true,
  fallbackCode: "",
  id: "default",
  code: "uk-UA",
  name: "Ukrainian",
  currentPageLocale: "uk-UA",
};

export const DefaultLocaleContext = React.createContext<TDefaultLocaleContext>(
  baseDefaultLocaleContext
);

export const useDefaultLocale = () => React.useContext(DefaultLocaleContext);
