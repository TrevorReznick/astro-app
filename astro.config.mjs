import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site:'https://astro-supabase-70m.pages.dev',
  integrations: [tailwind(), solidJs()],
  output: "server",
  adapter: cloudflare()
});