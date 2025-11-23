/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />

declare module 'virtual:pwa-register' {
  export type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
    onRegisterError?: (error: any) => void;
  };

  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>;
}

declare module 'virtual:pwa-info' {
  export interface PwaInfo {
    pwaInDevEnvironment: boolean;
    webManifest: {
      href: string;
      useCredentials: boolean;
      linkTag: string;
    };
  }
  const pwaInfo: PwaInfo | undefined;
  export { pwaInfo };
}
