import React, { useState } from 'react';
import { MONTHS } from './Helper';
import MonthSearch from './MonthSearch';
import TransactionTable from './TransactionTable';
import db from '../../fstore/fmanager'

const Month = props => {
  let currentMonth = new Date(Date.now()).getMonth();
  const [month, setMonth] = useState(currentMonth);

  const getMonthlyTransactions = () => {

    let mt = props.transactions.filter(
      transaction => 
      new Date(transaction['date']).getMonth() === Number(month)
    );
    return <TransactionTable monthlyTransactions={mt} deleteTransaction = {deleteTransaction} />;
  };

  const deleteTransaction = id => {
    db.collection('transactions').doc(id).delete()
    .then(() => {
      console.log("Delete Successful!");
      // let transactions = props.transactions;
      // let delInx = transactions.findIndex(trans => trans['id'] === id);

      // transactions.splice(delInx,1);
      
      //Not working
      props.getTransactions();
    })
    .catch(err => console.log(`Could Not Delete: ${err}`));
  }

  return (
    console.log(props.transactions,'m'),
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2>{MONTHS[month]}</h2>
        {getMonthlyTransactions()}
      </>
  );
}

export default Month;