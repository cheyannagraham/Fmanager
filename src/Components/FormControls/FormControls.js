import React from "react";
import TextField from "@material-ui/core/TextField";

export const FormControl = props => {
  return (
    <TextField variant="standard" {...props}>
      {props.children}
    </TextField>
  );
};

/*
-----------------------
LOGIN & SIGNUP
----------------------
*/

export const Email = props => {
  return (
    <FormControl
      label="email"
      id="email"
      name="email"
      type="email"
      required
      {...props}
    />
  );
};

export const Password = props => {
  return (
    <FormControl
      label="password"
      id="pwd"
      name="pwd"
      type="password"
      required
      {...props}
    />
  );
};

export const Username = props => {
  return (
    <FormControl
      label="Username"
      name="Username"
      type="text"
      id="username"
      required
      {...props}
    />
  );
};
