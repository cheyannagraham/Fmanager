import React, { useContext } from "react";
import ExitToAppRounded from "@material-ui/icons/ExitToAppRounded";
import { ModalContext } from "../../App/App";
import { auth } from "../../fb/fb";
import { CloseModalButton } from "../Modal/Modal";
import WithFab from "../WithFab/WithFab";

const Home = props => {
  const showModal = useContext(ModalContext);

  const signout = () => {
    auth.signOut().catch(err =>
      showModal({
        show: true,
        type: "error",
        title: "Error Signing Out!",
        text: err,
        actions: <CloseModalButton autofocus={true} variant="contained" />
      })
    );
  };

  return (
    <WithFab>
      <ExitToAppRounded onClick={signout} />
    </WithFab>
  );
};

export default Home;
