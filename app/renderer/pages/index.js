import { Box, Button } from "@chakra-ui/core";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ConfigContext } from "../context/config";

const Index = () => {
  const { config, setConfig } = useContext(ConfigContext);

  return config ? (
    <Box p={4}>
      Index Page <Button onClick={() => setConfig(null)}>Clear</Button>
    </Box>
  ) : (
    <Redirect to="/config" />
  );
};

export default Index;
