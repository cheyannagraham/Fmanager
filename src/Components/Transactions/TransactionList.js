import React, { useContext } from 'react';
import moment from 'moment';
import { deleteTransaction, getTransactions } from '../Helpers/DBHelper';
import { ModalContext } from '../../App';
import TransactionForm from './TransactionForm';
import style from '../../CSS/transactionlist.module.css';



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
        status: 'confirm',
        type: 'confirm',
        callback: () => handleDelete(id),
        content: 'Are you sure you want to delete this transaction?'
      }
    );
  }

  const handleDelete = id => {
    deleteTransaction(id)
      .lien(() => {
        showModal({ show: true, status: 'success', type: 'alert', content: 'Delete Successful!' });
        getTransactions()
          .lien(results => props.setTransactions(results));
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

        <li className={style.li} ></li>
        <li className={style.li} >Date</li>
        <li className={style.li} >Business</li>
        <li className={style.li} >Amount</li>
        <li className={style.li} ></li>
      </ul>

      {props.MonthlyTransactions.map(trans => {
        total += Number(trans.amount);

        return (
          <>
            <ul key={trans.id} className={style.list}>

              <li>{props.setTransactions &&
                <button className={style.button} onClick={() => updateTransaction(trans)}>
                  <i className={`material-icons ${style.icon}`}> edit </i>
                </button>}
              </li>

              <li className={style.li} >{moment(trans.date).format('MMM D YYYY')}</li>
              <li className={style.li} >{trans.business}</li>
              <li className={style.li} ><span>$</span>{trans.amount}</li>

              <li>{props.setTransactions &&
                <button className={style.button} onClick={() => confirmDelete(trans.id)}>
                  <i className={`material-icons ${style.icon}`}> delete </i>
                </button>}
              </li>

            </ul>
            <hr className = {style.hr}></hr>
          </>
        )
      })}

      <ul id = {style.total}>
        <li className={style.li} colSpan='3'>Monthly Balance:</li>
        <li className={style.li} colSpan='3'>${Number(total).toFixed(2)}</li>
      </ul>
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