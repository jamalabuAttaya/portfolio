"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { dictionaries, type Locale } from "@/app/i18n/content";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  copy: (typeof dictionaries)[Locale];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "jamal-portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const switchingRef = useRef(false);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch { saved = null; }
    const preferred: Locale = saved === "ar" || saved === "en"
      ? saved
      : navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
    const frame = window.requestAnimationFrame(() => setLocale(preferred));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.locale = locale;
    try { window.localStorage.setItem(STORAGE_KEY, locale); } catch { /* Preference storage may be unavailable. */ }
  }, [locale]);

  const toggleLanguage = useCallback(() => {
    if (switchingRef.current) return;
    switchingRef.current = true;
    const root = document.documentElement;
    root.classList.add("language-changing");
    window.setTimeout(() => {
      setLocale((current) => current === "en" ? "ar" : "en");
      window.requestAnimationFrame(() => {
        root.classList.remove("language-changing");
        switchingRef.current = false;
      });
    }, 120);
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    copy: dictionaries[locale],
    toggleLanguage,
  }), [locale, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
