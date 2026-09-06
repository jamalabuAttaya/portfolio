"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, type ReactNode } from "react";
import { dictionaries, type Locale } from "@/app/i18n/content";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  copy: (typeof dictionaries)[Locale];
  toggleLanguage: () => void;
  alternateHref: "/" | "/ar";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "jamal-portfolio-language";

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale: Locale }) {
  const locale = initialLocale;
  const switchingRef = useRef(false);

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
      const nextLocale = locale === "en" ? "ar" : "en";
      try { window.localStorage.setItem(STORAGE_KEY, nextLocale); } catch { /* Preference storage may be unavailable. */ }
      window.location.assign(nextLocale === "ar" ? "/ar" : "/");
    }, 120);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    copy: dictionaries[locale],
    toggleLanguage,
    alternateHref: locale === "ar" ? "/" : "/ar",
  }), [locale, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
