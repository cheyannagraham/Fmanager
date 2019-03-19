import React, { useState, useEffect } from 'react';
import TransactionTable from '../Transactions/TransactionTable';
// import OTB from '../OutstandingBalance/OutstandingBalance'
import style from '../../CSS/month.module.css';
import moment from 'moment';

const Month = props => {
  let currentMonth = moment().format('M');
  const [month, setMonth] = useState(currentMonth);
  const [monthlyTransactions,setMonthlyTransactions] = useState([]);

  const getMonthlyTransactions = (newMonth) => {
    let mt = props.transactions.filter(
      transaction => moment(transaction.date).format('M') === String(newMonth)
    )

    setMonthlyTransactions(mt);
    setMonth(newMonth);
  };

  useEffect(() => {
    getMonthlyTransactions(month);
  },[]);

  const handleClick = (e) => {
    getMonth(e);
  }

  const getMonth = val => {
    const monthVal = Number(month) + val;
    const newMonth = monthVal === 0 ?
    12 :
    monthVal === 13 ?
    1 :
    monthVal;
    
    getMonthlyTransactions(newMonth);
  }


  return (
      <>
        <div id = {style['month-header']} >

          <button onClick = {() => {handleClick(-1)}}>
              la
          </button>

          <h2 className = {style.header}>{moment(month,'MM').format('MMMM')}</h2>

          <button onClick = {() => {handleClick(1)}}>
              >
          </button>

        </div>
        <TransactionTable MonthlyTransactions={monthlyTransactions} setTransactions = {props.setTransactions} />;
      </>
  );
}

export default Month;

//<OTB allTrans = {props.transactions} month = {month} />
