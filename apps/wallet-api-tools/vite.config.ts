import { createRequire } from "node:module";
import path from "node:path";
import react from "@vitejs/plugin-react";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const require = createRequire(import.meta.url);
const reactPlugin = react as () => PluginOption;
const nodePolyfillsPath = path.dirname(
  require.resolve("vite-plugin-node-polyfills"),
);
const bufferShimPath = path.join(
  nodePolyfillsPath,
  "../shims/buffer/dist/index.js",
);

export default defineConfig({
  // The wallet crypto deps (@stacks/transactions, @ton/core, ...) rely on
  // Node globals like Buffer/process that Next.js polyfilled automatically.
  plugins: [
    nodePolyfills({
      include: ["buffer"],
      globals: { Buffer: true, global: false, process: false },
    }),
    reactPlugin(),
  ],
  resolve: {
    alias: {
      // The polyfill plugin injects `import ... from
      // "vite-plugin-node-polyfills/shims/buffer"` into our deps (e.g. the
      // simulator workspace package). During the Rolldown build that bare
      // specifier resolves relative to the importing package, which can't see
      // the plugin under pnpm's layout. Pin it to an absolute path so it
      // resolves no matter where the import originates. Use the ESM shim so
      // Vite's dependency optimizer can bundle it in dev.
      "vite-plugin-node-polyfills/shims/buffer": bufferShimPath,
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
