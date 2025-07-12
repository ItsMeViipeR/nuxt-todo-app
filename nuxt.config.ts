import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/ui", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Page",
      titleTemplate: "%s - Nuxt Todo App",
    },
  },
});
