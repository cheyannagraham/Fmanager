import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const useInputState = (def = "") => {
  const [value, setValue] = useState(def);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value: value,
    setValue: setValue,
    handleChange: handleChange
  };
};

export const FormControl = props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField
      onChange={handleChange}
      variant="standard"
      {...props}
      value={value}
    >
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
