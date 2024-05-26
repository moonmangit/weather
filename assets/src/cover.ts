const fileMap: Record<string, string[]> = {
  // Clear sky
  "/images/day-clear.jpg": ["01d"],
  "/images/night-clear.jpg": ["01n"],
  // Cloud
  "/images/day-cloud.jpg": ["02d", "04d"],
  "/images/night-cloud.jpg": ["02n", "04n"],
  // Fog
  "/images/day-fog.jpg": ["50d"],
  "/images/night-fog.jpg": ["50n"],
  // Thunderstorm
  "/images/day-storm.jpg": ["11d"],
  "/images/night-storm.jpg": ["11n"],
  // Rain
  "/images/day-rain.jpg": ["09d", "10d"],
  "/images/night-rain.jpg": ["09n", "10n"],
  // Snow
  "/images/day-snow.jpg": ["13d"],
  "/images/night-snow.jpg": ["13n"],
};

export function getCoverFromIconFile(fileName: string) {
  for (const [cover, icons] of Object.entries(fileMap)) {
    if (icons.includes(fileName)) {
      return cover;
    }
  }
  return null;
}
