"use client";

import { createContext, use, useEffect, useMemo, useState } from "react";
import { IntlProvider } from "use-intl";
import { defaultLocale, messages, type Locale } from "./config";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext value={contextValue}>
      <IntlProvider locale={locale} messages={messages[locale]} timeZone="Europe/Madrid">
        {children}
      </IntlProvider>
    </LocaleContext>
  );
};

export const useLocaleSwitcher = () => {
  const context = use(LocaleContext);
  if (!context) {
    throw new Error("useLocaleSwitcher must be used within a LocaleProvider");
  }
  return context;
};
