import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  target: "esnext",
  minify: false,
  treeshake: true,
  bundle: true,
  outDir: "dist",
  external: ["react", "react-native"],
});
