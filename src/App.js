import React, { useState, useEffect } from "react";
import "./App.css";
import Month from "./Components/Month/Month.js";
import TransactionForm from "./Components/Transactions/TransactionForm.js";
import {getTransactions} from './Components/Helpers/DB';

const App = () => {
  let [transactions, setTransactions] = useState([
    {
      id : '23',
      date : '2019-02-22',
      amount : 22,
      type : 'income',
      business : 'me'
    }
  ]);

  useEffect(() => {
    getTransactions()
    .then(r => setTransactions(r));
    
  }, []);

  //get all transactions at once.
  //store in state.
  //use Month component to filer dats

  // const getTransactions = () => {
  //     db.collection("transactions")
  //       .get()
  //       .then(results => {
  //         let tr = [];
  //         results.forEach(doc => {
  //           tr.push(Object.assign(doc.data(), { id: doc.id }));
  //         });
  //         setTransactions(tr);
  //       })
  //       .catch(err => alert(`Error getting documents ${err}`));
  // };

  return (
    <>
      <Month getTransactions={getTransactions} transactions={transactions} />
      <TransactionForm setTransactions={setTransactions} />
    </>
  );
};

export default App;
//TODO: see about caching firebase requests
//add better error messages for validation
//add better validation for mal scripts
//Maybe add a delete all? 
//signin features? 
//css pseudo classes for valitation
//popup box over input to show how data should be entered
//transactiontable renders even if props don't chanege(month rerenders)
//consider if anything needs to be done regarding reflecting changes when data is added on different devices
//add features to show year wehn displaying BTD
//testing
//incorrect date display edge?
//store credentials
//allow to edit transaction w/o deletion and reEntry
//BUG: wrong Date Entry
//create production build for basic use
//fix OTB moment

//================================
//REFACTOR
//DB methods