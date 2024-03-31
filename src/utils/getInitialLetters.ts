export const getInitialLetters = (value?: string) => {
  if (!value) return "";
  return value
    .split(" ")
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr[0], "")
    .toUpperCase();
};
