/// <reference path="../.astro/types.d.ts" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />

interface Window {
  netlifyIdentity?: {
    on: (event: string, callback: (user?: any) => void) => void;
    init: () => void;
  };
}
