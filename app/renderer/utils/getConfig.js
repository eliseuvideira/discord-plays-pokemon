export const getConfig = () => {
  console.log("here");

  const config = localStorage.getItem("config");

  if (!config) {
    return null;
  }

  return JSON.parse(config);
};
