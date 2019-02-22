import React, { useState } from 'react';
import { MONTHS } from '../Helpers/Helper';
import MonthSearch from './MonthSearch';
import TransactionTable from '../Transactions/TransactionTable';
import db from '../../fstore/fmanager'
import OTB from '../OutstandingBalance/OutstandingBalance'
import moment from 'moment';

const Month = props => {
  let currentMonth = moment().format('M');
  const [month, setMonth] = useState(currentMonth);
  console.log(moment().format('M'));

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
      moment(transaction['date']).format('M') === Number(month)
    );
    return <TransactionTable transactions={mt} deleteTransaction = {deleteTransaction} />;
  };

  return (
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2>{month}</h2>
        {getMonthlyTransactions()}
        <OTB allTrans = {props.transactions} month = {month} />
      </>
  );
}

export default Month;