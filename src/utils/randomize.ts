export const randomizeIndex = (e: any[]) => {
  return e[Math.floor(Math.random() * e.length)];
};