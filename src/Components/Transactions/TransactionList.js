import React, { useContext } from 'react';
import moment from 'moment';
import { deleteTransaction, getTransactions } from '../Helpers/DBHelper';
import { ModalContext } from '../../App';
import TransactionForm from './TransactionForm';
import style from '../../CSS/transactionlist.module.css';
import TransactionItem from './TransactionItem';
import Button from '@material-ui/core/Button';
import { CloseModalButton} from '../Modal/Modal';



const TransactionList = props => {
  let total = 0;
  const showModal = useContext(ModalContext).setShowModal;

  const sortTransactions = () => {
    props.MonthlyTransactions.sort((prev, next) => {
      return moment(next.date) - moment(prev.date);
    });
  }

  const confirmDelete = (id) => {
    showModal(
      {
        show: true,
        title: 'confirm',
        text: 'Are you sure you want to delete this transaction?',
        content: 
        <>
          <Button color='primary' variant= 'contained' onClick = {() => handleDelete(id)} > Confirm </Button>
          <CloseModalButton onClick = {() => handleDelete(id)} > Confirm </CloseModalButton>
        </>
      }
    );
  }

  const handleDelete = id => {
    deleteTransaction(id)
      .then(() => {
        showModal({ show: true, status: 'success', type: 'alert', content: 'Delete Successful!' });
        getTransactions()
          .then(results => props.setTransactions(results));
      })
      .catch(err => showModal({ show: true, status: 'error', type: 'alert', content: err }));
  }

  //possible effect
  const updateTransaction = (transaction) => {
    showModal(
      {
        show: true,
        status: 'update',
        type: 'update',
        content: <TransactionForm setTransactions={props.setTransactions} type='update' currentTransaction={transaction} />
      }
    );
  }

  return (
    sortTransactions(),
    <>
      <ul id='transaction-list' className={style.list}>
        <li className={`${style.li} ${style['list-title']}`} ></li>
        <li className={`${style.li} ${style['list-title']}`} >Date</li>
        <li className={`${style.li} ${style['list-title']}`} >Business</li>
        <li className={`${style.li} ${style['list-title']}`} >Amount</li>
        <li className={`${style.li} ${style['list-title']}`} ></li>
      </ul>

      <hr className = {style.hr} />

      {props.MonthlyTransactions.length > 0 ? 
      props.MonthlyTransactions.map(trans => {
        total += Number(trans.amount)    

        return <TransactionItem confirmDelete = {confirmDelete} updateTransaction = {updateTransaction} trans = {trans} key = {trans.id} /> 
      }):
        <div id = {style.empty}>
          <p>No Transactations</p>
        </div>
      }

      {props.setMonthlyTotal(total)}

    </>
  )

}


export default TransactionList;



      //remove from local to prevent another read from firestore
      //ERROR: only updating monthly transactions, not entire list so does not work without access totoal transactions
      //       {
      //       // const trans = props.MonthlyTransactions;
      //       // console.log(trans.length)
      //       // const deletedTrans = trans.findIndex( trs => trs.id === id)
      //       // trans.splice(deletedTrans,1);
      //       // console.log(trans.length)

      //       // props.setTransactions(trans)
      //        }