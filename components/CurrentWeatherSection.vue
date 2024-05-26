<template>
  <section
    class="flex-1 flex items-center min-h-[calc(100dvh)] relative duration-700"
  >
    <div
      class="container mx-auto text-white flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between flex-wrap gap-y-3"
    >
      <section class="flex flex-col p-5">
        <!-- Temp -->
        <div class="text-center lg:text-left">
          <div class="flex flex-col-reverse lg:flex-col">
            <h1
              class="text-8xl lg:text-9xl flex justify-center lg:justify-start"
            >
              {{ content.main.temp }}<span class="text-base pt-3">°c</span>
            </h1>
            <p
              class="capitalize flex flex-col lg:flex-row items-center gap-2 py-5 lg:py-0"
            >
              <span class="text-xl lg:text-base">
                {{ content.weather[0].description }},
              </span>
              <span>
                <Icon
                  name="material-symbols:location-on-outline-rounded"
                ></Icon>
                {{ content.name }}
              </span>
            </p>
          </div>

          <section
            class="flex items-center gap-8 py-8 justify-center lg:justify-start"
          >
            <div>
              <p class="text-xs">Feels Like</p>
              <span class="flex items-center gap-x-2">
                <Icon name="solar:facemask-circle-outline"></Icon>
                {{ content.main.feels_like }}°c
              </span>
            </div>
            <div>
              <p class="text-xs">Range</p>
              <span class="flex items-center gap-x-2">
                <Icon name="solar:spedometer-low-linear"></Icon>
                {{ content.main.temp_min }}°c ~ {{ content.main.temp_max }}°c
              </span>
            </div>
          </section>
        </div>
        <!-- Info -->
        <div class="border p-5 grid grid-cols-2 gap-4">
          <!-- Wind -->
          <section
            class="grid grid-cols-[repeat(3,max-content_1fr)] items-center gap-1 gap-x-2 col-span-2"
          >
            <p class="text-xs col-span-6">Wind</p>
            <Icon name="solar:spedometer-low-linear"></Icon>
            {{ content.wind.speed }} m/s
            <Icon name="material-symbols:storm-outline-rounded"></Icon>
            {{ content.wind.gust }} m/s
            <Icon name="solar:compass-linear"></Icon>
            <span>
              {{ content.wind.deg }}° ({{
                degreeToDirection(content.wind.deg)
              }})
            </span>
          </section>
          <!-- Humidity -->
          <section
            class="grid grid-cols-[repeat(2,max-content_1fr)] items-center gap-1 gap-x-2 col-span-2 lg:col-span-1"
          >
            <p class="text-xs col-span-4">Humidity</p>
            <Icon
              name="material-symbols:humidity-helper-outline-rounded"
            ></Icon>
            {{ content.main.humidity }} %
          </section>
          <!-- Cloud -->
          <section
            class="grid grid-cols-[repeat(2,max-content_1fr)] items-center gap-1 gap-x-2"
          >
            <p class="text-xs col-span-4">Clouds</p>
            <Icon name="material-symbols:cloud"></Icon>
            {{ content.clouds.all }} %
          </section>
          <!-- Pressure -->
          <section
            class="grid grid-cols-[repeat(2,max-content_1fr)] items-center gap-1 gap-x-2 col-span-2"
          >
            <p class="text-xs col-span-4">Pressure</p>
            <Icon name="streamline:beach"></Icon>
            {{ Intl.NumberFormat().format(content.main.sea_level) }} hPa
            <Icon name="material-symbols:home-work-outline-rounded"></Icon>
            {{ Intl.NumberFormat().format(content.main.grnd_level) }} hPa
          </section>
          <!-- Rain -->
          <!-- Snow -->
        </div>
      </section>
      <section>
        <p class="capitalize lg:p-5">{{ timeString }}</p>
      </section>
    </div>
    <!-- Scroll Down Action -->
    <div
      class="text-white flex flex-col items-center absolute bottom-10 w-full z-10"
    >
      <div class="flex flex-col items-center justify-center rounded-full gap-2">
        <p>forecast</p>
        <Icon name="material-symbols:arrow-downward"></Icon>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  content: any;
}>();

const { timeString } = useClock();
</script>

<style></style>
