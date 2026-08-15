import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindCanonicalClasses from "eslint-plugin-tailwind-canonical-classes";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Enforce canonical Tailwind class names (e.g. `bg-white/8` instead of
  // `bg-white/[.08]`), matching the Tailwind IntelliSense `suggestCanonicalClasses` lint.
  {
    plugins: {
      "tailwind-canonical-classes": tailwindCanonicalClasses,
    },
    rules: {
      "tailwind-canonical-classes/tailwind-canonical-classes": [
        "warn",
        { cssPath: "./app/globals.css" },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
