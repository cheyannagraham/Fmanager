import React, { useState, useEffect } from "react";
import "./App.css";
import Month from "./Components/Month/Month.js";
import TransactionForm from "./Components/TransactionForm/TransactionForm.js";
import db from "./fstore/fmanager";

const App = () => {
  let [transactions, setTransactions] = useState(['No Transactions']);

  useEffect(() => {
    getTransactions();
  }, []);

  //get all transactions at once.
  //store in state.
  //use Month component to filer dats

  const getTransactions = tran => {
      db.collection("transactions")
        .get()
        .then(results => {
          let tr = [];
          results.forEach(doc => {
            tr.push(Object.assign(doc.data(), { id: doc.id }));
          });
          setTransactions(tr);
        })
        .catch(err => console.log(`Error getting documents ${err}`));
  };

  return (
    <>
      <Month getTransactions={getTransactions} transactions={transactions} />
      <TransactionForm setTransactions={setTransactions} />
    </>
  );
};

export default App;
//TODO: add overlapping month balance
