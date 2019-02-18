import React, { useState } from 'react';
import { MONTHS } from './Helper';
import MonthSearch from './MonthSearch';
import TransactionTable from './TransactionTable';
import db from '../../fstore/fmanager'

const Month = props => {
  let currentMonth = new Date(Date.now()).getMonth();
  const [month, setMonth] = useState(currentMonth);

  const deleteTransaction = id => {
    db.collection('transactions').doc(id).delete()
    .then(() => {
      console.log("Delete Successful!");
      let transactions = props.transactions;
      let delInx = transactions.findIndex(trans => trans['id'] === id);

      transactions.splice(delInx,1);      
      props.getTransactions(transactions);
    })
    .catch(err => console.log(`Could Not Delete: ${err}`));

  }

  const getMonthlyTransactions = () => {

    let mt = props.transactions.filter(
      transaction => 
      new Date(transaction['date']).getMonth() === Number(month)
    );
    return <TransactionTable monthlyTransactions={mt} deleteTransaction = {deleteTransaction} />;
  };

  return (
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2>{MONTHS[month]}</h2>
        {getMonthlyTransactions()}
      </>
  );
}

export default Month;