import React, { useState, useEffect } from "react";
import "./App.css";
import Month from "./Components/Month/Month.js";
import TransactionForm from "./Components/Transactions/TransactionForm.js";
import {getTransactions} from './Components/Helpers/DBHelper';

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
    .then(r => setTransactions(r))
    .catch(err => alert(err));
    
  }, []);

  return (
    <>
      <Month setTransactions={setTransactions} transactions={transactions} />
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
//bug in delete trans when show BTD
//validateDate()
//extract input components