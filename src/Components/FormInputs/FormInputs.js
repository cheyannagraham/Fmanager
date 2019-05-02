import React, { useState } from "react";
import style from "../../CSS/transactionform.module.css";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.forminputs';


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
  const {classes} = props;

  return (
    <InputLabel className={classes.label} htmlFor={props.id}>
      {props.label}
      <Input
      className={classes.margin}
        inputProps={{
          pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}",
          id: props.id,
          name: "date"
        }}
        value={value}
        onChange={handleChange}
        type="date"
        //older browsers
        placeholder="mm/dd/yyyy"
        required
      />
    </InputLabel>
  );
});


export const BusinessInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  const {classes} = props;


  return (
    <InputLabel className={classes.label} htmlFor={props.id}>
      {props.label}
      <Input
      className={classes.margin}
        inputProps={{
          id: props.id,
          name: "business"
        }}
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Target"
        required
      />
    </InputLabel>
  );
});


export const AmountInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  const {classes} = props;


  return (
    <InputLabel className={classes.label} htmlFor={props.id}>
      {props.label}
      <Input
        className={classes.margin}
        inputProps={{
          id: props.id,
          name: "amount",
          step: 0.01
        }}
        value={value}
        onChange={handleChange}
        type="number"
        placeholder="$37.19"
        required
      />
    </InputLabel>
  );
});


export const TransactionTypeInput = withStyles(styles)(props => {
  const { value, handleChange } = useInputState(props.value);
  const {classes} = props;


  return (
    <InputLabel className={classes.label} htmlFor={props.id}>
      {props.label}
      <Select
      className={classes.margin}
        inputProps={{
          id: props.id,
          name: "type"
        }}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="purchase">Purchase</MenuItem>
      </Select>
    </InputLabel>
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
      placeholder="GrayG123"
      required
      variant={props.variant}
    />
  );
});


