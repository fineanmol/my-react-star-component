// rollup.config.js
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main, // CommonJS
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // ES Modules
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
