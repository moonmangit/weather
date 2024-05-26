export function unixSecondsToDate(unixSeconds: number): Date {
  return new Date(unixSeconds * 1000);
}

export function degreeToDirection(degree: number) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return directions[Math.round(degree / 22.5) % 16];
}
