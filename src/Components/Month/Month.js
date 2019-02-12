import React, { useState } from 'react';
import { MONTHS } from './Helper';
import MonthSearch from './MonthSearch';
import TransactionTable from './TransactionTable';

export default function Month(props) {
  let currentMonth = new Date(Date.now()).getMonth();
  const [month, setMonth] = useState(currentMonth);

  const getMonthlyTransactions = () => {
    let mt = props.transactions.filter(
      transaction => 
      new Date(transaction['date']).getMonth() === Number(month)
    );

    return <TransactionTable monthlyTransactions={mt} />;
  };

  return (
      <>
        <MonthSearch setMonth={setMonth} month={month} />
        <h2>{MONTHS[month]}</h2>
        {getMonthlyTransactions()}
      </>
  );
}

