import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es"
    },
    routing: {
      prefixDefaultLocale: false
    }
  }
});