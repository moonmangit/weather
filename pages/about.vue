<template>
  <div>
    <div class="min-h-[calc(100dvh-3rem)] pt-[68px] flex flex-col">
      <section
        class="container mx-auto flex justify-center h-[10dvw]"
      ></section>
      <section class="bg-white text-gray-700 relative flex-1">
        <div class="container mx-auto p-8 text-center space-y-5">
          <h1 class="text-xl">About Veather</h1>
          <hr class="w-[min(350px,30dvw)] mx-auto border-gray-300" />
          <section class="space-y-5 w-[min(75ch,80dvw)] mx-auto">
            <p>
              At Veather, we're all about providing accurate, up-to-date weather
              info to help you plan your day with ease. This practice project,
              built with <b>Nuxt.js</b>, <b>Tailwind CSS</b>, <b>Firebase</b>,
              and the <b>OpenWeather API</b>, offers real-time updates tailored
              to your location. Get current weather details like temperature,
              conditions, humidity, wind, visibility, and air quality. Plus,
              enjoy our 24-hour forecasts featuring hourly temperature
              predictions, precipitation, wind forecasts, UV index updates, and
              weather alerts. Stay informed and make the most of every moment
              with Veather!
            </p>
          </section>
          <ul class="flex justify-center gap-x-4">
            <li
              v-for="(soc, key) in socials"
              :key="key"
            >
              <a
                :href="soc.link"
                target="_blank"
                class="flex items-center"
              >
                <Icon
                  :name="soc.logoIcon"
                  class="text-4xl"
                />
              </a>
            </li>
          </ul>
        </div>

        <div
          class="absolute bottom-[calc(100%-1px)] h-[50px] lg:h-[150px] bg-white inset-x-0 clip-path-polygon-[0_100%,_0_0,_50%_98%,_100%_0,_100%_100%] duration-300"
        />
      </section>
    </div>
    <div class="fixed inset-0 z-[-1] brightness-50">
      <img
        class="w-full h-full object-cover"
        src="/images/day-rain.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const socials: Record<
  string,
  {
    logoIcon: string;
    link: string;
  }
> = {
  github: {
    logoIcon: "logos:github-icon",
    link: "https://github.com/moonmangit",
  },
  email: {
    logoIcon: "logos:google-gmail",
    link: "mailto:seagame.std@gmail.com",
  },
  facebook: {
    logoIcon: "logos:facebook",
    link: "https://www.facebook.com/seagame.std",
  },
};
</script>

<style scoped></style>
