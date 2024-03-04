import React from "react";
import { defaultHero } from "./constants";

export const SWContext = React.createContext<any>({
    hero: defaultHero,
    changeeHero: (hero: string) => {}
})