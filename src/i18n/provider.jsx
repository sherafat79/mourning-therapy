"use client";
import { createContext, useContext } from "react";
import { isRtl, localePath } from "./config";

const I18nContext = createContext(null);

export function I18nProvider({ locale, dict, children }) {
  const value = { locale, t: dict, rtl: isRtl(locale), path: (href) => localePath(locale, href) };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
