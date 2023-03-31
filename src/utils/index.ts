export const randomizeIndex = (e: unknown[]) => {
  return e[Math.floor(Math.random() * e.length)];
};
