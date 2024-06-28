import React from "react";

export type SupportedLocales = "de" | "en" | "fr" | "sp";

export const L10nContext = React.createContext<SupportedLocales>("en");
