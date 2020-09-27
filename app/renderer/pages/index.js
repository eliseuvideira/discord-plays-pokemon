import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ConfigContext } from "../context/config";

const Index = () => {
  const { config, setConfig } = useContext(ConfigContext);

  return config ? (
    <div>
      Index Page <button onClick={() => setConfig(null)}>Clear</button>
    </div>
  ) : (
    <Redirect to="/config" />
  );
};

export default Index;
