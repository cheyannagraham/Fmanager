import React, { useContext } from "react";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import { ModalContext } from "../../App/App";
import { auth } from "../../fb/fb";
import WithFab from "../WithFab/WithFab";
import Catch from "../Catch/Catch";

const Signout = props => {
  const modalContent = useContext(ModalContext).setModalContent;

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        throw Error("Throw Signout");
      })
      .catch(error =>
        modalContent(Catch({ error: error, title: "Signout Error" }))
      );
  };

  return (
    <WithFab handleClick={signout}>
      <ExitToAppRounded />
    </WithFab>
  );
};

export default Signout;
