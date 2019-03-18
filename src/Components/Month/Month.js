import React, { useState } from 'react';
import MonthSearch from './MonthSearch';
import TransactionTable from '../Transactions/TransactionTable';
// import OTB from '../OutstandingBalance/OutstandingBalance'
import style from '../../CSS/month.module.css';
import moment from 'moment';

const Month = props => {
  let currentMonth = moment().format('M');
  const [month, setMonth] = useState(currentMonth);

  const getMonthlyTransactions = () => {   
    let mt = props.transactions.filter(
      transaction => moment(transaction.date).format('M') === month
    )
    return <TransactionTable MonthlyTransactions={mt} setTransactions = {props.setTransactions} />;
  };

  return (
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2 className = {style.header}>{moment(month,'MM').format('MMMM')}</h2>
        {getMonthlyTransactions()}
      </>
  );
}

export default Month;

//<OTB allTrans = {props.transactions} month = {month} />
