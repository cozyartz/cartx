var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_CiN1cN_f.mjs";
import { manifest } from "./manifest_CeykpT0X.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/claude.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/grillz.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/_business_.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page4");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/claude.md", _page1],
  ["src/pages/grillz.astro", _page2],
  ["src/pages/[business].astro", _page3],
  ["src/pages/index.astro", _page4]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.2368610605093312.mjs.map
