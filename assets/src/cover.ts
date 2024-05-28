const names: Record<string, string[]> = {
  "day-clear": ["01d"],
  "night-clear": ["01n"],
  "day-cloud": ["02d", "04d"],
  "night-cloud": ["02n", "04n"],
  "day-fog": ["50d"],
  "night-fog": ["50n"],
  "day-storm": ["11d"],
  "night-storm": ["11n"],
  "day-rain": ["09d", "10d"],
  "night-rain": ["09n", "10n"],
  "day-snow": ["13d"],
  "night-snow": ["13n"],
};

type Scales = "0.25" | "0.5" | "0.75";

function getCoverNameFromIconFile(fileName: string) {
  for (const [cover, icons] of Object.entries(names)) {
    if (icons.includes(fileName)) {
      return cover;
    }
  }
  return null;
}

export function getCoverFromIconFile(
  fileName: string,
  scale: Scales | "1" = "1",
) {
  const coverName = getCoverNameFromIconFile(fileName);
  if (coverName) {
    if (scale !== "1") {
      return `/resize/${scale}/${coverName}.jpg`;
    } else {
      return `/images/${coverName}.jpg`;
    }
  }
  return null;
}
