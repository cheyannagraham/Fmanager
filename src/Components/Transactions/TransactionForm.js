import React, {useContext} from 'react';
import {updateTransaction,getTransactions, addTransaction} from '../Helpers/DBHelper';
import {validateDate} from '../Helpers/DateHelper';
import * as FormInputs from '../FormInputs/FormInputs';
import { ModalContext } from '../../App';
import style from '../../CSS/transactionform.module.css';
import {CloseModalButton} from '../Modal/Modal';



const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const currTrans = props.currentTransaction;


  const handleClick = e => {
      //For optimization, only submit if different
    e.preventDefault();
    const userInput = document.getElementById('transaction-date').value;
    const validDate = validateDate(userInput);
    
    if(validDate) {
        createTransaction(validDate);
    } else {
        showModal({show:true, status:'error',type:'alert',content:'Invalid Date. please enter a date between 1-1-1900 and 12-31-2050'});
    }
  };

  const createTransaction = date => {
    const type = document.getElementById('transaction-type').value; 
    const amount = Math.abs(document.getElementById('transaction-amount').value); 
    
    const newTrans =  {
        type: type,
        business: document.getElementById('transaction-business').value,
        amount: type === 'income' ? Number(amount).toFixed(2) : Number(-amount).toFixed(2),
        date: date,
        id: (currTrans && currTrans.id) || ''
    };
    
    //add transaction or updateTraction. either, way, set transaction needs to run
    if(props.type === 'add') {
        addTransaction(newTrans)
        .then(trans => {
            //Double RENDER
            props.setTransactions(prev => [...prev,trans]);
            showModal({show:true, status:'success',type:'alert',content:'Transaction Added'});
        })
        .catch(err => showModal({show:true, status:'error',type:'alert',content:err}));
    }

    if(props.type === 'update') {
        updateTransaction(newTrans)
        .then(res => {
            getTransactions()
            .then(tr => {
                //Double RENDER
                props.setTransactions(tr);
                showModal({show:true, status:'success',type:'alert',content:res});
            })
        })
        .catch(err => showModal({show:true, status:'error',type:'alert',content:err}));
    }
  };


  return (
    <form id='transaction-form' className = {style.form} onSubmit={handleClick}>

      <FormInputs.DateInput label='Date' id='transaction-date' value={currTrans && currTrans.date} />
      
      <FormInputs.BusinessInput label='Business' id='transaction-business' value={currTrans && currTrans.business} />
      
      <FormInputs.AmountInput label='Amount' id='transaction-amount' value={currTrans && currTrans.amount} />
      
      <FormInputs.TransactionTypeInput label='Type' id='transaction-type' value={currTrans && currTrans.type} />

      <button className = {style.button} type='submit'>{props.type}</button>
      <CloseModalButton />
    </form>
  );
};

export default TransactionForm;
