export const CurrentMoonstepList = ["moon1", "moon2", "moon3"];

export function randomMoonstep(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
