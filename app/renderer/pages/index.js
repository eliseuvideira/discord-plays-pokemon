import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getConfig } from "../utils/getConfig";

const Index = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const config = getConfig();
    setConfig(config);
  }, []);

  return config ? <div>Index Page</div> : <Redirect to="/config" />;
};

export default Index;
