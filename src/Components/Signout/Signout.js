import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { ModalContext } from "../../App/App";
import { auth } from "../../fb/fb";
import { CloseModalButton } from "../Modal/Modal";

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
    <Button onClick={signout} color="secondary">
      Signout
    </Button>
  );
};

export default Home;
