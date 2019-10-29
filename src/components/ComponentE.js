import React, {useContext} from "react";
import ComponentF from "./ComponentF";
import {UserContext, ChannelContext} from "../App"

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      {channel} - {user}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
