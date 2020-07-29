import React, { useContext } from "react";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import { ModalContext } from "../../App/App";
import { auth } from "../../fb/fb";
import Catch from "../Catch/Catch";
import { IconButton } from "@material-ui/core";

const Signout = props => {
  const modalContent = useContext(ModalContext);

  const signout = () => {
    auth
      .signOut()
      .catch(error =>
        modalContent(Catch({ error: error, title: "Signout Error" }))
      );
  };

  return (
    <IconButton onClick={signout}>
      <ExitToAppRounded />
    </IconButton>
  );
};

export default Signout;
