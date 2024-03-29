import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Vota",
    "nav.team": "Información",
    "nav.skills": "Archivo",
    "nav.constac": "Aviso Legal",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.team": "My team",
    "nav.skills": "Skills",
    "nav.constac": "Contact",
  },
} as const;

export const routes = {
  es: {
    vota: "vota",
    info: "info",
    archivo: "archivo",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  en: {
    vota: "vote",
    info: "information",
    archivo: "archive",
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies",
  },
};
