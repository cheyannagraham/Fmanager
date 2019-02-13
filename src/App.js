import React, { useState, useEffect } from 'react';
import './App.css';
import Month from './Components/Month/Month.js';
import TransactionForm from './Components/TransactionForm/TransactionForm.js'

const App = () => {
  let [transactions, setTransactions] = useState(['No Transactions']);

  useEffect(() => {
    fetch('./data.JSON')
    .then(res => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
    .then(resp => {
      setTransactions(resp);
    })
    .catch(error => error);

  },[]);



  return (
    <>
      <Month transactions = {transactions} />
      <TransactionForm setTransactions = {setTransactions} />
    </>
  )

}

export default App;
//TODO: 
// figure out how to add entries
//form submit only works once