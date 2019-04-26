import React from 'react';
import style from '../../CSS/transactionform.module.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export const DateInput = props => {

  return (
      <InputLabel className = {style.label} htmlFor={props.id}>
        {props.label}
        <Input className = {style.input}
        //maybe delete classname?
         /* { className = 'transaction-date' }*/
          id={props.id}
          name='date'
          type='date'
          placeholder='mm/dd/yyyy'
          defaultValue = {props.value || '' }
          required
          pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
        />
      </InputLabel>
  );
};

export const BusinessInput = props => {
  return (
      <InputLabel className = {style.label} htmlFor={props.id}>
        {props.label}
        <Input className = {style.input}
          id={props.id}
          name='business'
          type='text'
          placeholder='Target'
          defaultValue = {props.value || ''}
          required
        />
      </InputLabel>
  );
};

export const AmountInput = props => {
  return (
      <InputLabel className = {style.label} htmlFor={props.id}>
        {props.label}
        <Input className = {style.input}
          id={props.id}
          name='amount'
          type='number'
          placeholder='$37.19'
          defaultValue = {props.value || ''}
          required
          step='0.01'
        />
      </InputLabel>
  );
};


export const TransactionTypeInput = props => {
  return (
      <InputLabel className = {style.label} htmlFor={props.id}>
        {props.label}
        <Select className = {style.select}
          id={props.id}
          name='type'
          defaultValue = {props.value || ''}>          
          <MenuItem value='income'>Income</MenuItem>
          <MenuItem value='purchase'>Purchase</MenuItem>
        </Select>
      </InputLabel>
  );
};
