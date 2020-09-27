import { Box, Button } from "@chakra-ui/core";
import { ipcRenderer } from "electron";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { ConfigContext } from "../context/config";

const Index = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [active, setActive] = useState(false);

  if (config && !active) {
    (async () => {
      await ipcRenderer.invoke("discord-login", config);
      const status = await ipcRenderer.invoke("discord-toggle", true);
      setActive(status);
    })();
  }

  return config ? (
    <Box p={4}>
      <Button
        onClick={async () => {
          const status = await ipcRenderer.invoke("discord-toggle", !active);
          setActive(status);
        }}
      >
        {active ? "Pause" : "Start"}
      </Button>
      <Button onClick={() => setConfig(null)}>Clear</Button>
    </Box>
  ) : (
    <Redirect to="/config" />
  );
};

export default Index;
