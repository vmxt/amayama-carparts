import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: [
      "src/**/*.{vue,jsx,tsx,svelte}",
      "shared/**/*.{vue,ts}",
      "./node_modules/flowbite/**/*.js",
    ],
  },
});
