import React, { useContext } from 'react';
import { updateTransaction, getTransactions, addTransaction } from '../Helpers/DBHelper';
import { validateDate } from '../Helpers/DateHelper';
import * as FormInputs from '../FormInputs/FormInputs';
import { ModalContext } from '../../App';
import { CloseModalButton } from '../Modal/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.transactionform';



const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const currTrans = props.currentTransaction;
  const {classes} = props;


  const handleClick = e => {
    //For optimization, only submit if different
    e.preventDefault();
    const userInput = document.getElementById('transaction-date').value;
    const validDate = validateDate(userInput);

    if (validDate) {
      createTransaction(validDate);
    } else {
      //maybe use a popover instead of a modal to keep current one open
      showModal({
        show: true,
        title: 'Validation Error!',
        type: 'error',
        text: 'Invalid Date. please enter a date between 1-1-1900 and 12-31-2050',
        actions: <CloseModalButton  autofocus={true} />
      });
    }
  };

  const createTransaction = date => {
    const type = document.getElementById('transaction-type').value;
    const amount = Math.abs(document.getElementById('transaction-amount').value);

    const newTrans = {
      type: type,
      business: document.getElementById('transaction-business').value,
      amount: type === 'income' ? Number(amount).toFixed(2) : Number(-amount).toFixed(2),
      date: date,
      id: (currTrans && currTrans.id) || ''
    };

    //add transaction or updateTraction. either, way, set transaction needs to run
    if (props.type === 'add') {
      addTransaction(newTrans)
        .then(trans => {
          //Double RENDER
          //maybe add timeout to close instead of button 
          props.setTransactions(prev => [...prev, trans]);
          showModal({
            show: true,
            title: 'Success',
            type: 'success',
            text: 'New Transaction Added',
            actions: 
            <>
              <Button color="primary" autoFocus variant="contained" onClick={props.saf}>Add Another </Button>
              <CloseModalButton />
            </>
          });
        })
        .catch(err => showModal({
          show: true,
          title: 'Error Adding New Transaction!',
          type: 'error',
          actions: <CloseModalButton autofocus={true} />,
          text: err
        }));
    }

    if (props.type === 'update') {
      updateTransaction(newTrans)
        .then(res => {
          getTransactions()
            .then(tr => {
              //Double RENDER
              props.setTransactions(tr);
              showModal({
                show: true,
                type: 'success',              
                title: 'Update Successful!',
                text: res,
                actions: <CloseModalButton autofocus={true} />
              });
            })
        })
        .catch(err => showModal({
          show: true,
          title: 'Update Failed! :( ',
          actions: <CloseModalButton autofocus={true} />,
          text: err,
          type : 'error',
        }));
    }
  };


  return (
    <form id='transaction-form'  onSubmit={handleClick}>

      <FormInputs.DateInput variant='standard' label='Date' id='transaction-date' value={currTrans && currTrans.date} autofocus={true} />

      <FormInputs.BusinessInput variant='standard' label='Business' id='transaction-business' value={currTrans && currTrans.business} />

      <FormInputs.AmountInput variant="standard" label='Amount' id='transaction-amount' value={currTrans && currTrans.amount} />

      <FormInputs.TransactionTypeInput variant="standard" label='Type' id='transaction-type' value={currTrans && currTrans.type} />
      
      <Grid container justify='flex-end' className={classes['button-container']}>
        <Button variant='contained' color='primary' type='submit'>{props.type}</Button>
        <CloseModalButton />
      </Grid>
    </form>
  );
};

export default withStyles(styles)(TransactionForm);
