function getLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos);
      },
      () => {
        reject(new Error("Failed to get location"));
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
}

export const weatherApi = {
  async getCurrent() {
    const pos = await getLocation();
    const { openWeatherMapKey, openWeatherMapURL } = useRuntimeConfig().public;
    return $fetch(openWeatherMapURL + "/weather", {
      query: {
        appid: openWeatherMapKey,
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        units: "metric",
      },
    });
  },
  async getForecast(count: number = 5) {
    const pos = await getLocation();
    const { openWeatherMapKey, openWeatherMapURL } = useRuntimeConfig().public;
    return $fetch(openWeatherMapURL + "/forecast", {
      query: {
        appid: openWeatherMapKey,
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        units: "metric",
        cnt: count,
      },
    });
  },
};
