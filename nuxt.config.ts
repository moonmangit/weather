// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: false,
  runtimeConfig: {
    public: {
      openWeatherMapURL: "",
      openWeatherMapKey: "",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
    "@vueuse/nuxt",
    "dayjs-nuxt",
  ],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
  },
});
