import React from "react";
import { breakpoints } from "./breakpoints";
import { TBreakpoint } from "src/types";

export const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState<TBreakpoint>("monitor");

  React.useEffect(() => {
    const listener = () => {
      const width = window.innerWidth;
      if (width <= +breakpoints.device.split("px")[0]) {
        setBreakpoint("device");
      } else if (width <= +breakpoints.laptop.split("px")[0]) {
        setBreakpoint("laptop");
      } else {
        setBreakpoint("monitor");
      }
    };
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return breakpoint;
};
