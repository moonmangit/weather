const weatherIconsMap: Record<string, string> = {
  "01d": "wi:day-sunny",
  "02d": "wi:day-cloudy",
  "03d": "wi:cloud",
  "04d": "wi:cloudy",
  "09d": "wi:showers",
  "10d": "wi:rain",
  "11d": "wi:thunderstorm",
  "13d": "wi:snow",
  "50d": "wi:fog",
  "01n": "wi:night-clear",
  "02n": "wi:night-alt-cloudy",
  "03n": "wi:cloud",
  "04n": "wi:cloudy",
  "09n": "wi:showers",
  "10n": "wi:rain",
  "11n": "wi:thunderstorm",
  "13n": "wi:snow",
  "50n": "wi:fog",
};

export const getWeatherIcon = (icon: string): string => {
  return weatherIconsMap[icon] || "wi:day-sunny";
};
