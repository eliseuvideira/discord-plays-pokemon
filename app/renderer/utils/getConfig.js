export const getConfig = () => {
  const config = localStorage.getItem("config");

  if (!config) {
    return null;
  }

  return JSON.parse(config);
};
