import React, { useState, useEffect } from 'react';
import './App.css';
import Month from './Components/Month/Month.js';
import TransactionForm from './Components/TransactionForm/TransactionForm.js'

const App = () => {
  let [totalTransactions, setTotalTransactions] = useState(['No Transactions']);

  useEffect(() => {
    fetch('./data.JSON')
    .then(res => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
    .then(resp => {
      setTotalTransactions(resp);
    })
    .catch(error => error);

  },[]);


  return (
    <>
      <Month transactions = {totalTransactions} />
      <TransactionForm />
    </>
  )

}

export default App;
//TODO: 
// figure out how to add entries