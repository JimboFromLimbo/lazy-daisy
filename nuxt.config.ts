import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/test-utils",
    "@nuxt/scripts",
    "reka-ui/nuxt",
    "@vee-validate/nuxt",
  ],

  components: {
    global: true,
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
