<template>
  <section
    class="flex-1 flex items-center min-h-[calc(100dvh)] relative duration-700"
  >
    <div
      class="container mx-auto text-white flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between flex-wrap gap-y-3"
    >
      <section class="flex flex-col p-5 lg:ml-[70px]">
        <!-- Temp -->
        <div class="text-center lg:text-left">
          <div class="flex flex-col-reverse lg:flex-col">
            <h1
              class="text-8xl lg:text-9xl flex justify-center lg:justify-start animate__animated animate__fadeInDown"
            >
              <AppNumberRunning
                :target="content.main.temp"
                :start="content.main.temp * 0.9"
                :duration-ms="1500"
                :per-tick="0.1"
              ></AppNumberRunning>
              <span class="text-base pt-3">°c</span>
            </h1>
            <p
              class="capitalize flex flex-col lg:flex-row items-center gap-2 py-5 lg:py-0"
            >
              <span
                class="text-xl lg:text-base block animate__animated animate__fadeInUp"
              >
                {{ content.weather[0].description }},
              </span>
              <span class="block animate__animated animate__fadeInDown">
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
            <DataWithLabel
              :content="{
                label: 'Feels Like',
                iconName: 'solar:facemask-circle-outline',
                value: content.main.feels_like,
              }"
            />
            <DataWithLabel
              :content="{
                label: 'Range',
                iconName: 'solar:spedometer-low-linear',
                value: `${content.main.temp_min}°c ~ ${content.main.temp_max}°c`,
              }"
            />
          </section>
        </div>
        <!-- Info -->
        <div
          class="border p-5 grid grid-cols-2 gap-4 animate__animated animate__fadeInUp animate__faster"
        >
          <!-- Wind -->
          <div class="whitespace-nowrap col-span-2">
            <p class="text-xs">Wind</p>

            <section class="flex items-center gap-x-3 flex-wrap">
              <IconValue
                :content="{
                  value: content.wind.speed + ' m/s',
                  iconName: 'solar:spedometer-low-linear',
                }"
              />
              <IconValue
                :content="{
                  value: content.wind.gust ? content.wind.gust + ' m/s' : '-',
                  iconName: 'material-symbols:storm-outline-rounded',
                }"
              />
              <IconValue
                :content="{
                  value: `${content.wind.deg}° (${degreeToDirection(content.wind.deg)})`,
                  iconName: 'solar:compass-linear',
                }"
              />
            </section>
          </div>
          <!-- Humidity -->
          <DataWithLabel
            :content="{
              label: 'Humidity',
              iconName: 'material-symbols:humidity-helper-outline-rounded',
              value: `${content.main.humidity} %`,
            }"
          />
          <!-- Cloud -->
          <DataWithLabel
            :content="{
              label: 'Clouds',
              iconName: 'material-symbols:cloud',
              value: `${content.clouds.all} %`,
            }"
          />

          <!-- Pressure -->
          <section
            class="grid grid-cols-[repeat(2,max-content_1fr)] gap-1 gap-x-2 col-span-2"
          >
            <p class="text-xs col-span-4">Pressure</p>
            <section class="flex gap-x-3">
              <IconValue
                :content="{
                  value: content.main.sea_level
                    ? `${content.main.sea_level} hPa`
                    : '-',
                  iconName: 'streamline:beach',
                }"
              ></IconValue>
              <IconValue
                :content="{
                  value: content.main.grnd_level
                    ? `${content.main.grnd_level} hPa`
                    : '-',
                  iconName: 'material-symbols:home-work-outline-rounded',
                }"
              ></IconValue>
            </section>
          </section>
          <!-- Rain -->
          <!-- Snow -->
        </div>
      </section>
    </div>
    <!-- Scroll Down Action -->
    <div
      class="text-white flex flex-col items-center absolute bottom-10 w-full z-10 duration-700"
      :class="{
        'translate-y-[50px] !text-gray-700': forecastActive,
      }"
    >
      <div
        class="flex flex-col items-center justify-center rounded-full gap-2 animate__animated animate__fadeIn"
      >
        <p class="animate__animated animate__fadeInUp">forecast</p>
        <Icon
          name="material-symbols:arrow-downward"
          class="animate__animated animate__fadeInDown animate__infinite animate__slow animate__delay-1s duration-300"
          :class="{
            'max-h-[0] overflow-hidden': forecastActive,
          }"
        ></Icon>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  content: any;
}>();

const forecastActive = ref(false);
onMounted(() => {
  const { y } = useScroll(document, {
    onScroll() {
      forecastActive.value = y.value > window.innerHeight * 0.25;
    },
  });
});
</script>

<style></style>
