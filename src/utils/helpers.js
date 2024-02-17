import portfolioData from "../assets/data";

// Used to set state for scalable nav links and portfolio pages
export const portfolio = Object.keys(portfolioData).filter(
  (key) => !key.includes("graphicNovels")
);

// Formats camelCase strings into other cases
export const format = {
  kebab: (string) => {
    return string.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
  },
  sentence: (string) => {
    const result =
      string.charAt(0).toUpperCase() +
      string.slice(1).replace(/[A-Z]/g, (match) => " " + match.toLowerCase());

    return result;
  },
  title: (string) => {
    const result =
      string.charAt(0).toUpperCase() +
      string.slice(1).replace(/[A-Z]/g, (match) => " " + match);

    return result;
  },
};
