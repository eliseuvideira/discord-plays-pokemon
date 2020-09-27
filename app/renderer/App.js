import React, { useEffect, useState } from "react";
import { ConfigContext } from "./context/config";
import Router from "./Router";
import { getConfig } from "./utils/getConfig";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const config = getConfig();
    setConfig(config);
  }, []);

  useEffect(() => {
    if (!config) {
      localStorage.removeItem("config");
    } else {
      localStorage.setItem("config", JSON.stringify(config));
    }
  }, [config]);

  return (
    <ThemeProvider>
      <CSSReset />
      <ConfigContext.Provider value={{ config, setConfig }}>
        <Router />
      </ConfigContext.Provider>
    </ThemeProvider>
  );
};

export default App;
