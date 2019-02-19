import React, { useState } from 'react';
import { MONTHS } from './Helper';
import MonthSearch from './MonthSearch';
import TransactionTable from '../Transactions/TransactionTable';
import db from '../../fstore/fmanager'
import OTB from '../OutstandingBalance/OutstandingBalance'

const Month = props => {
  let currentMonth = new Date(Date.now()).getMonth();
  const [month, setMonth] = useState(currentMonth);

  const deleteTransaction = id => {
    db.collection('transactions').doc(id).delete()
    .then(() => {
      console.log("Delete Successful!");   
      props.getTransactions();
    })
    .catch(err => console.log(`Could Not Delete: ${err}`));

  }

  const getMonthlyTransactions = () => {

    let mt = props.transactions.filter(
      transaction => 
      new Date(transaction['date']).getMonth() === Number(month)
    );
    return <TransactionTable transactions={mt} deleteTransaction = {deleteTransaction} />;
  };

  return (
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2>{MONTHS[month]}</h2>
        {getMonthlyTransactions()}
        <OTB allTrans = {props.transactions} month = {month} />
      </>
  );
}

export default Month;