import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.formcontrols';

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

export const FormControl = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  
  return (
    <TextField  
    onChange={handleChange}
    value={value}
    variant="standard"
    {...props}
    >
    {props.children}
    </TextField>
  )
});

/*
-----------------------
LOGIN & SIGNUP
----------------------
*/

// HOC
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
}

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
}

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
}


