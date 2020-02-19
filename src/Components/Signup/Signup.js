import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/styles/withStyles";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password, Username } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
// Styles from Login styles
import styles from "../Login/styles.login";
import { auth } from "../../fb/fb";
import Catch from "../Catch/Catch";

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
    <Button size="medium" onClick={showForm} variant="contained">
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
    showModal(false);
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
      .then(() => {
        throw Error("Throw Signup");
      })
      .catch(error =>
        showModal(Catch({ error: error, title: "Signup Error" }))
      );
  };

  const variant = "filled";

  return (
    <form className={classes.form} id="signup-form" onSubmit={handleSignup}>
      <Username autoFocus={true} variant={variant} />
      <Email variant={variant} />
      <Password variant={variant} />
      <div>
        <Button variant="contained" type="submit">
          Signup
        </Button>
        <CloseModalButton />
      </div>
    </form>
  );
});
