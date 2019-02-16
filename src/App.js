import React, { useState, useEffect } from 'react';
import './App.css';
import Month from './Components/Month/Month.js';
import TransactionForm from './Components/TransactionForm/TransactionForm.js'
import db from './fstore/fmanager';

const App = () => {
  let [transactions, setTransactions] = useState(['No Transactions']);

  useEffect(() => {
    getTransactions();
  },[]);
  
  //get all transactions at once.
  //store in state. 
  //use Month component to filer dats
  const getTransactions = () => {
    console.log('yo');
    db.collection('transactions').get()
    .then(results => {
      let tr = [];
      results.forEach(doc => {
        tr.push(doc.data())
      });
      setTransactions(tr);
    })
    .catch(err => console.log(`Error getting documents ${err}`));
  }

  return (
    <>
      <Month transactions = {transactions} />
      <TransactionForm setTransactions = {setTransactions} />
    </>
  )

}

export default App;
//TODO: 
