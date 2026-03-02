import type { Config } from "tailwindcss";
import baseConfig from "./base";

const config: Config = {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
