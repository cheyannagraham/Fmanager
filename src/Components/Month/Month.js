import React, { useState } from 'react';
import MonthHeader from './MonthHeader';
import TransactionTable from '../Transactions/TransactionTable';
// import OTB from '../OutstandingBalance/OutstandingBalance'
import style from '../../CSS/month.module.css';
import moment from 'moment';

const Month = props => {
  let currentMonth = moment().format('M');
  const [month, setMonth] = useState(currentMonth);

  const getMonthlyTransactions = () => {  

    let mt = props.transactions.filter(
      transaction => moment(transaction.date).format('M') === String(month)
    )
    return <TransactionTable MonthlyTransactions={mt} setTransactions = {props.setTransactions} />;
  };

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
    
    setMonth(newMonth);
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
        {getMonthlyTransactions()}
      </>
  );
}

export default Month;

//<OTB allTrans = {props.transactions} month = {month} />
