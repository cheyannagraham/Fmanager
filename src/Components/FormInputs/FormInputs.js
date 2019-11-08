import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.forminputs';
import moment from 'moment';


//hook to add & manage input state

const useInputState = (def = "") => {
  //set initital value as default if provided
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

// -------------------- TRANSACTION  ----------------------


export const DateInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField
      label={props.label}
      id={props.id}
      name="date"
      type="date"
      value={value|| moment().format('YYYY-MM-DD')}
      onChange={handleChange}
      placeholder="user@fmanager.com"
      inputProps={{
        pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
      }}
      autoFocus = {props.autofocus}
      required
      variant={props.variant}
    />
  );
});


export const BusinessInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField
      label={props.label}
      id={props.id}
      name="business"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Target"
      required
      autoFocus = {props.autofocus}
      variant={props.variant}
    />
  );
});


export const AmountInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField
      label={props.label}
      id={props.id}
      name="amount"
      type="number"
      inputProps={{
        step: 0.01
      }}
      value={value}
      onChange={handleChange}
      placeholder="$37.19"
      autoFocus = {props.autofocus}
      variant={props.variant}
      required
    />
  );
});


export const TransactionTypeInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);

  return (
    <TextField
      select
      InputLabelProps={{
        shrink:true,
        margin:'dense'
      }}
      id={props.id}
      label={props.label}
      name="type"
      value={value}
      onChange={handleChange}
      variant={props.variant}
      required
      >
        <MenuItem key="income" value="income">Income</MenuItem>
        <MenuItem key="purchase" value="purchase">Purchase</MenuItem>
    </TextField>
  );
});

// -------------------- LOGIN & SIGNUP ----------------------


export const Email = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  const {classes} = props;


  return (
    <TextField className={classes.margin}
      label="email"
      id="email"
      name="email"
      type="email"
      value={value}
      onChange={handleChange}
      placeholder="user@fmanager.com"
      autoFocus = {props.autofocus}
      required
      variant={props.variant}
    />
  );
});

export const Password = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  const {classes} = props;


  return (
    <TextField className={classes.margin}
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
  const {classes} = props;


  return (
    <TextField className={classes.margin}
      label="Username"
      name="Username"
      type="text"
      id="username"
      value={value}
      onChange={handleChange}
      autoFocus = {props.autofocus}
      placeholder="GrayG123"
      required
      variant={props.variant}
    />
  );
});


