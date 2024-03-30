import english from "@/i18n/en.json";
import spanish from "@/i18n/es.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};
