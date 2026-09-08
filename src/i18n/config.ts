import en from "@/translations/en.json";
import es from "@/translations/es.json";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const messages: Record<Locale, typeof es> = { es, en };
