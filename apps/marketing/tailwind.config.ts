import type { Config } from "tailwindcss";
import { tailwindConfig } from "@workigom/design-system";

const config: Config = {
  ...tailwindConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
};
export default config;
