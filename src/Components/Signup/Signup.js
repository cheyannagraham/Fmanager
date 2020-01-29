import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password, Username } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
// Styles from Login styles
import styles from "../Login/styles.login";
import { auth } from "../../fb/fb";

const SignupButton = props => {
  const showModal = useContext(ModalContext).setShowModal;

  const showForm = () => {
    showModal({
      show: true,
      type: "signup",
      title: "Create An Account",
      content: <SignupForm />
    });
  };
  return (
    <Button
      size="medium"
      onClick={showForm}
      color="primary"
      variant="contained"
    >
      SignUp
    </Button>
  );
};

export default SignupButton;

export const SignupForm = withStyles(styles)(props => {
  const showModal = useContext(ModalContext).setShowModal;
  const { classes } = props;

  const handleSignup = async e => {
    e.preventDefault();
    const form = document.querySelector("#signup-form");
    const [username, email, pwd] = [
      form["username"].value,
      form["email"].value,
      form["pwd"].value
    ];
    const displayName = username
      ? (username[0].toUpperCase() + username.slice(1)).trim()
      : "";

    await auth
      .createUserWithEmailAndPassword(email, pwd)
      .then(async () => {
        //add username to profile
        await auth.currentUser.updateProfile({ displayName: displayName });
      })
      .catch(err =>
        showModal({
          show: true,
          type: "error",
          title: "Signup Error!",
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
    showModal(false);
  };

  const variant = "filled";

  return (
    <form className={classes.form} id="signup-form" onSubmit={handleSignup}>
      <Username autoFocus={true} variant={variant} />
      <Email variant={variant} />
      <Password variant={variant} />
      <div>
        <Button variant="contained" color="primary" type="submit">
          Signup
        </Button>
        <CloseModalButton />
      </div>
    </form>
  );
});