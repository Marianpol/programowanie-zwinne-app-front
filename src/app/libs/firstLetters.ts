const firstLetters = (string: string) => {
  return string
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export default firstLetters;
