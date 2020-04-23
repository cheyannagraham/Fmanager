import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export const FormControl = props => {
  return (
    <Box mb={2.5} display="grid">
      <TextField variant="standard" {...props}>
        {props.children}
      </TextField>
    </Box>
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
