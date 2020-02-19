import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import withStyles from "@material-ui/styles/withStyles";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password, Username } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
// Styles from Login styles
import styles from "../Login/styles.login";
import { auth } from "../../fb/fb";
import Catch from "../Catch/Catch";
import formReducer from "../Helpers/formReducer";
import StyledFormControl from "../StyledComponents/StyledFormControl";

const SignupButton = props => {
  const modalContent = useContext(ModalContext);

  const showForm = () => {
    modalContent({
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
  const modalContent = useContext(ModalContext);
  const [formState, formDispatch] = useReducer(formReducer, {
    username: "",
    email: "",
    pwd: ""
  });

  const handleSignup = async event => {
    event.preventDefault();
    modalContent(false);
    const displayName = formState.username
      ? (
          formState.username[0].toUpperCase() + formState.username.slice(1)
        ).trim()
      : "";

    await auth
      .createUserWithEmailAndPassword(formState.email, formState.pwd)
      .then(async () => {
        //add username to profile
        await auth.currentUser.updateProfile({ displayName: displayName });
      })
      .then(() => {
        throw Error("Throw Signup");
      })
      .catch(error =>
        modalContent(Catch({ error: error, title: "Signup Error" }))
      );
  };

  const variant = "filled";

  return (
    <form id="signup-form" onSubmit={handleSignup}>
      <StyledFormControl>
        <Username
          value={formState.username}
          autoFocus={true}
          variant={variant}
          onChange={event =>
            formDispatch({ input: "username", value: event.target.value })
          }
        />
      </StyledFormControl>
      <StyledFormControl>
        <Email
          value={formState.email}
          variant={variant}
          onChange={event =>
            formDispatch({ input: "email", value: event.target.value })
          }
        />
      </StyledFormControl>

      <StyledFormControl>
        <Password
          value={formState.pwd}
          variant={variant}
          onChange={event =>
            formDispatch({ input: "pwd", value: event.target.value })
          }
        />
      </StyledFormControl>
      <StyledFormControl>
        <DialogActions>
          <Button variant="contained" type="submit">
            Signup
          </Button>
          <CloseModalButton />
        </DialogActions>
      </StyledFormControl>
    </form>
  );
});
