import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password } from "../FormControls/FormControls";
import { auth } from "../../fb/fb";
import styles from "./styles.login";

const LoginButton = props => {
  const showModal = useContext(ModalContext).setShowModal;

  const showForm = () => {
    showModal({
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
      variant="contained"
    >
      Login
    </Button>
  );
};
export default LoginButton;

export const LoginForm = withStyles(styles)(props => {
  const showModal = useContext(ModalContext).setShowModal;
  const { classes } = props;

  const handleLogin = e => {
    e.preventDefault();
    const form = document.querySelector("#login-form");
    const [email, pwd] = [form["email"].value, form["pwd"].value];
    auth.signInWithEmailAndPassword(email, pwd).catch(err =>
      showModal({
        show: true,
        title: "Login Error!",
        type: "error",
        text: (
          <>
            <strong>{err.code} :</strong>
            <br></br>
            <br></br>
            {err.message}
          </>
        ),
        actions: <CloseModalButton variant="contained" autoFocus={true} />
      })
    );
    //close Modal after logging in
    showModal(false);
  };
  const variant = "outlined";

  return (
    <form className={classes.form} id="login-form" onSubmit={handleLogin}>
      <Email autoFocus={true} variant={variant} />
      <Password variant={variant} />
      <div>
        <Button variant="contained" type="submit">
          Login
        </Button>
        <CloseModalButton />
      </div>
    </form>
  );
});
