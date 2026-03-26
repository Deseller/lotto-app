import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "lucky645",
  brand: {
    displayName: "행운의 로또645",
    primaryColor: "#FF6B35",
    icon: "https://static.toss.im/appsintoss/24815/9701e3d4-96e0-4967-b22e-52698db9d793.png",
  },
  web: {
    host: "deseller.github.io",
    port: 443,
    commands: {
      dev: "npx serve .",
      build: "vite build",
    },
  },
  webViewProps: {
    type: "partner",
  },
});
