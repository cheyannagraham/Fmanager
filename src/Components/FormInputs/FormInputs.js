import React from "react";

export const DateInput = props => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
        <input
          className="transaction-date"
          id={props.id}
          name="date"
          type="date"
          placeholder="mm/dd/yyyy"
          required
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
        />
      </label>
    </>
  );
};

export const BusinessInput = props => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
        <input
          id={props.id}
          name="business"
          type="text"
          placeholder="Target"
          required
        />
      </label>
    </>
  );
};

export const AmountInput = props => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
        <input
          id={props.id}
          name="amount"
          type="number"
          placeholder="$37.19"
          required
          step="0.01"
        />
      </label>
    </>
  );
};


export const TransactionTypeInput = props => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
        <select 
          id={props.id}
          name="type">
          <option value="income">Income</option>
          <option value="purchase">Purchase</option>
        </select>
      </label>
    </>
  );
};
