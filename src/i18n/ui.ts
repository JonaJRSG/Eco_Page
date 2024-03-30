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
    "nav.about": "Sobre mi",
    "nav.team": "Información",
    "nav.skills": "Habilidades",
    "nav.contac": "Contactame",
    "nav.blog": "Blog",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.team": "My team",
    "nav.skills": "Skills",
    "nav.contac": "Contact me",
    "nav.blog": "Blog",
  },
} as const;

export const routes = {
  es: {},
  en: {},
};
