import React, {useContext} from "react";
import {addTransaction} from '../Helpers/DBHelper';
import {validateDate} from "../Helpers/DateHelper";
import * as FormInputs from '../FormInputs/FormInputs';
import { ModalContext } from "../../App";

const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;

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
        showModal({show:true, status:'success',type:'alert',content:'Transaction Added!'});
      })
      .catch(err => showModal({show:true, status:'error',type:'alert',content:err}));
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
