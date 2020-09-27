import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { ConfigContext } from "../context/config";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";

const Config = () => {
  const { config, setConfig } = useContext(ConfigContext);

  const [fields, setFields] = useState({
    token: "",
    serverId: "",
    channelId: "",
  });

  const onChange = (field) => (e) =>
    setFields({ ...fields, [field]: e.target.value });

  const onSubmit = (e) => {
    e.stopPropagation();

    if (fields.token && fields.serverId && fields.channelId) {
      setConfig(fields);
    }
  };

  return config ? (
    <Redirect to="/" />
  ) : (
    <Box p={4}>
      <form onSubmit={onSubmit}>
        <FormControl mt={2}>
          <FormLabel htmlFor="token">Token</FormLabel>
          <Input
            id="token"
            name="token"
            placeholder="token"
            type="text"
            value={fields.token}
            onChange={onChange("token")}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel htmlFor="serverId">Server Id</FormLabel>
          <Input
            id="serverId"
            name="serverId"
            placeholder="serverId"
            type="text"
            value={fields.serverId}
            onChange={onChange("serverId")}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel htmlFor="channelId">Channel Id</FormLabel>
          <Input
            id="channelId"
            name="channelId"
            placeholder="channelId"
            type="text"
            value={fields.channelId}
            onChange={onChange("channelId")}
          />
        </FormControl>
        <Button mt={4} variantColor="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Config;
