import React from "react";
import {addTransaction} from '../Helpers/DBHelper';
import {validateDate} from "../Helpers/DateHelper";
import * as FormInputs from '../FormInputs/FormInputs';

const TransactionForm = props => {
  const handleClick = e => {
    e.preventDefault();
    const userInput = document.getElementById('transaction-date').value;
    const validDate = validateDate(userInput);
    validDate ? submitFormData(validDate) : alert('Invalid Date');
  };

 
  const submitFormData = (date) => {
    const form = document.getElementById("transaction-form");

      const newTransaction = {
        type: document.getElementById("transaction-type").value,
        business: document.getElementById("transaction-business").value,
        amount: Number(document.getElementById("transaction-amount").value).toFixed(2),
        date: date
      };

      addTransaction(newTransaction)
      .then(newTrans => {
        props.setTransactions(prevTrans => [...prevTrans, newTrans]);
        form.reset();
        document.getElementById("transaction-date").focus();
        alert('Transaction Added!')
      })
      .catch(err => alert(err));
  };

  return (
    <form id="transaction-form" onSubmit={handleClick}>

      <FormInputs.DateInput label='Date' id='transaction-date' />
      
      <FormInputs.BusinessInput label='Business' id='transaction-business' />
      
      <FormInputs.AmountInput label='Amount' id='transaction-amount' />
      
      <FormInputs.TransactionTypeInput label='Type' id='transaction-type' />

      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
