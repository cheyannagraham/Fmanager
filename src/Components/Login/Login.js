import React, { useContext, useReducer } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password } from "../FormControls/FormControls";
import { auth } from "../../fb/fb";
import Catch from "../Catch/Catch";
import formReducer from "../Helpers/formReducer";

const LoginButton = props => {
  const modalContent = useContext(ModalContext);

  const showForm = () => {
    modalContent({
      show: true,
      type: "login",
      title: "Login To Your Account",
      content: <LoginForm />
    });
  };

  return (
    <Button
      size="medium"
      onClick={showForm}
      variant="outlined"
      color="secondary"
    >
      Login
    </Button>
  );
};
export default LoginButton;

export const LoginForm = props => {
  const modalContent = useContext(ModalContext);
  const [formState, formDispatch] = useReducer(formReducer, {
    email: "",
    pwd: ""
  });

  const handleLogin = event => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(formState.email, formState.pwd)
      .catch(error =>
        modalContent(Catch({ error: error, title: "Login Error" }))
      );
    //close Modal after logging in
    modalContent(false);
  };
  const variant = "filled";

  return (
    <form id="login-form" onSubmit={handleLogin}>
      <Email
        autoFocus={true}
        variant={variant}
        value={formState.email}
        onChange={event =>
          formDispatch({ input: "email", value: event.target.value })
        }
      />

      <Password
        variant={variant}
        value={formState.pwd}
        onChange={event =>
          formDispatch({ input: "pwd", value: event.target.value })
        }
      />

      <DialogActions>
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
        <CloseModalButton />
      </DialogActions>
    </form>
  );
};
