import React from 'react';
import style from '../../CSS/transactionform.module.css';


export const DateInput = props => {

  return (
      <label className = {style.label} htmlFor={props.id}>
        {props.label}
        <input className = {style.input}
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
      </label>
  );
};

export const BusinessInput = props => {
  return (
      <label className = {style.label} htmlFor={props.id}>
        {props.label}
        <input className = {style.input}
          id={props.id}
          name='business'
          type='text'
          placeholder='Target'
          defaultValue = {props.value || ''}
          required
        />
      </label>
  );
};

export const AmountInput = props => {
  return (
      <label className = {style.label} htmlFor={props.id}>
        {props.label}
        <input className = {style.input}
          id={props.id}
          name='amount'
          type='number'
          placeholder='$37.19'
          defaultValue = {props.value || ''}
          required
          step='0.01'
        />
      </label>
  );
};


export const TransactionTypeInput = props => {
  return (
      <label className = {style.label} htmlFor={props.id}>
        {props.label}
        <select className = {style.select}
          id={props.id}
          name='type'
          defaultValue = {props.value || ''}>          
          <option value='income'>Income</option>
          <option value='purchase'>Purchase</option>
        </select>
      </label>
  );
};
