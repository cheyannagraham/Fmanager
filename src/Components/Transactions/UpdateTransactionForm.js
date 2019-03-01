import React, {useContext} from "react";
import {updateTransaction,getTransactions} from '../Helpers/DBHelper';
import {validateDate} from "../Helpers/DateHelper";
import * as FormInputs from '../FormInputs/FormInputs';
import { ModalContext } from "../../App";

const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;

  const handleClick = e => {
      //For optimization, only submit if different
    e.preventDefault();
    const userInput = document.getElementById('update-transaction-date').value;
    const validDate = validateDate(userInput);
    if(validDate) {
        submitFormData(validDate);


    } else {
        showModal({show:true, status:'error',type:'alert',content:'Invalid Date. please enter a date between 1-1-1900 and 12-31-2050'});
    }
  };

 
  const submitFormData = (date) => {
    // const form = document.getElementById("update-transaction-form");
    const newTransaction = {
        type: document.getElementById("update-transaction-type").value,
        business: document.getElementById("update-transaction-business").value,
        amount: Number(document.getElementById("update-transaction-amount").value).toFixed(2),
        date: date,
        id: props.currentTransaction.id
    };

      updateTransaction(newTransaction)
      .then(() => {
          getTransactions()
          .then(updatedTransactions => {
        //       console.log(updatedTransactions)
            props.setTransactions(updatedTransactions);
            // form.reset();
            // document.getElementById("transaction-date").focus();
            
            //close update transaction from on confirm(add)
            showModal({show: false});
            showModal({show:true, status:'success',type:'alert',content:'Transaction Updated!'});
          })
      })
      .catch(err => showModal({show:true, status:'error',type:'alert',content:err}));
  };

  return (console.log(props),
    <form id="update-transaction-form" onSubmit={handleClick}>

      <FormInputs.DateInput label='Date' id='update-transaction-date' value={props.currentTransaction.date} />
      
      <FormInputs.BusinessInput label='Business' id='update-transaction-business' value={props.currentTransaction.business} />
      
      <FormInputs.AmountInput label='Amount' id='update-transaction-amount' value={props.currentTransaction.amount} />
      
      <FormInputs.TransactionTypeInput label='Type' id='update-transaction-type' value={props.currentTransaction.type} />

      <button type="submit">Update</button>
    </form>
  );
};

export default TransactionForm;
