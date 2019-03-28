import React from 'react';
import style from '../../CSS/transactionlist.module.css';
import moment from 'moment';



const TransactionItem = props => {

  return (
    <>
      <ul className={style.list}>

        <li>
          <button className={style.button} onClick={() => props.updateTransaction(props.trans)}>
            <i className={`material-icons ${style.icon}`}> edit </i>
          </button>
        </li>

        <li className={`${style.li}, ${style['trans-list-item']}`} >{moment(props.trans.date).format('D MMM')}</li>
        <li className={`${style.li}, ${style['trans-list-item']}`} >{props.trans.business}</li>
        <li className={`${style.li}, ${style['trans-list-item']}`} ><span>$</span>{props.trans.amount}</li>

        <li>
          <button className={style.button} onClick={() => props.confirmDelete(props.trans.id)}>
            <i className={`material-icons ${style.icon}`}> delete </i>
          </button>
        </li>

      </ul>

      <hr className={style.hr}></hr>
    </>
  )
}

export default TransactionItem;