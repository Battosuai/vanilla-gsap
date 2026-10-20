import { readdirSync } from "node:fs";
import { defineConfig } from "@rsbuild/core";
import { pluginTailwindcss } from "@rsbuild/plugin-tailwindcss";

// Every folder in src/pages is a page: <name>/index.ts + <name>/index.html.
const entry = Object.fromEntries(
  readdirSync("./src/pages", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [d.name, `./src/pages/${d.name}/index.ts`]),
);

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginTailwindcss()],
  html: {
    template: ({ entryName }) => `./src/pages/${entryName}/index.html`,
  },
  source: { entry },
  tools: {
    // `import html from "./x.html?raw"` gives the file as a string.
    rspack: {
      module: {
        rules: [
          { test: /\.html$/, resourceQuery: /raw/, type: "asset/source" },
        ],
      },
    },
  },
});
