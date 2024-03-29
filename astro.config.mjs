import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: "https://astrobuild.vercel.app/",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap({}), image()],
  adapter: vercel()
});