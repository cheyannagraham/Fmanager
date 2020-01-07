import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.forminputs';

// Custom Hook
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

// HOC
export const FormControl = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField {...props} 
    onChange={handleChange}
    value={value}
    >
    {props.children}
    </TextField>
  )
});

// -------------------- TRANSACTION  ----------------------




// -------------------- LOGIN & SIGNUP ----------------------


export const Email = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField 
      label="email"
      id="email"
      name="email"
      type="email"
      value={value}
      onChange={handleChange}
      autoFocus = {props.autofocus}
      required
      variant={props.variant}
    />
  );
});

export const Password = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField 
      label="password"
      id="pwd"
      name="pwd"
      type="password"
      value={value}
      onChange={handleChange}
      required
      variant={props.variant}
    />
  );
});


export const Username = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField 
      label="Username"
      name="Username"
      type="text"
      id="username"
      value={value}
      onChange={handleChange}
      autoFocus = {props.autofocus}
      required
      variant={props.variant}
    />
  );
});


