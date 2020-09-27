import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { ConfigContext } from "../context/config";

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
    <div>
      <form onSubmit={onSubmit}>
        <section>
          <label htmlFor="token">Token</label>
          <input
            id="token"
            name="token"
            type="text"
            value={fields.token}
            onChange={onChange("token")}
          />
        </section>
        <section>
          <label htmlFor="serverId">Server Id</label>
          <input
            id="serverId"
            name="serverId"
            type="text"
            value={fields.serverId}
            onChange={onChange("serverId")}
          />
        </section>
        <section>
          <label htmlFor="channelId">Channel Id</label>
          <input
            id="channelId"
            name="channelId"
            type="text"
            value={fields.channelId}
            onChange={onChange("channelId")}
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Config;
