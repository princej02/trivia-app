import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react-swc'


const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg", "maskable.png"],
  manifest: {
    name: 'BrainBurst',
    short_name: 'BrainBurst',
    description: 'A trivia game to test your knowledge.',
    icons: [
      {
        src: "/assets/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/assets/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/assets/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/assets/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
}


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
