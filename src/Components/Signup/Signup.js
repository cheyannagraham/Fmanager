import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { CloseModalButton } from "../Modal/Modal";
import { Email, Password, Username } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
import { auth } from "../../fb/fb";
import Catch from "../Catch/Catch";
import formReducer from "../Helpers/formReducer";

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
    <Button size="medium" onClick={showForm} variant="outlined" color="primary">
      SignUp
    </Button>
  );
};

export default SignupButton;

export const SignupForm = props => {
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
      .catch(error =>
        modalContent(Catch({ error: error, title: "Signup Error" }))
      );
  };

  const variant = "filled";

  return (
    <form id="signup-form" onSubmit={handleSignup}>
      <Username
        value={formState.username}
        autoFocus={true}
        variant={variant}
        onChange={event =>
          formDispatch({ input: "username", value: event.target.value })
        }
      />

      <Email
        value={formState.email}
        variant={variant}
        onChange={event =>
          formDispatch({ input: "email", value: event.target.value })
        }
      />

      <Password
        value={formState.pwd}
        variant={variant}
        onChange={event =>
          formDispatch({ input: "pwd", value: event.target.value })
        }
      />

      <DialogActions>
        <Button variant="outlined" type="submit" color="secondary">
          Signup
        </Button>
        <CloseModalButton />
      </DialogActions>
    </form>
  );
};
