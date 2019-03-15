import React, { useState, useEffect } from 'react';
import Month from './Components/Month/Month.js';
import {getTransactions} from './Components/Helpers/DBHelper';
import Modal from './Components/Modal/Modal'
import TransactionForm from './Components/Transactions/TransactionForm';
import RunningTotal from './Components/RunningTotal/RunningTotal';
import style from './CSS/app.module.css';
export const ModalContext = React.createContext(false);


const App = () => {
  const [showModal,setShowModal] = useState({show: false});
  const [runningTotal,setRunningTotal] = useState(0);
  const [transactions, setTransactions] = useState([
    {
      id : '23',
      date : '2019-03-22',
      amount : 22,
      type : 'income',
      business : 'me'
    }
  ]);

  const showAddForm = () => {
    setShowModal(
      {
        show:true,
        status:'add', 
        type:'add', 
        content: <TransactionForm setTransactions ={setTransactions} type = 'add' /> });
  }

  const calcRunningTotal = () => {
    let rt = 0;
    transactions.forEach(trans => {
      rt += Number(trans.amount);
    });

    setRunningTotal(rt);
  }

  useEffect(() => {
    // getTransactions()
    // .then(r => setTransactions(r))
    // .catch(err => setShowModal(
    //   {show:true,status:'error',content:err,type:'alert'}))    
  }, []);


  useEffect(() => {
    calcRunningTotal();
  },[transactions]);

  return (
    <div id = {style['app-div']}>
      <ModalContext.Provider value = {{setShowModal}}>
        
        {showModal.show && <Modal content = {showModal} /> }
        
        <Month setTransactions={setTransactions} transactions={transactions} />
        
        <RunningTotal total = {runningTotal} />
        
        <button onClick = {showAddForm}>add Transaction</button>
      
      </ModalContext.Provider>
    </div>
    
  );
};

export default App;
//TODO: see about caching firebase requests
//add better error messages for validation
//add better validation for mal scripts
//Maybe add a delete all? 
//signin features? 
//css pseudo classes for validation
//popup box over input to show how data should be entered
//transactiontable renders even if props don't chanege(month rerenders)
//consider if anything needs to be done regarding reflecting changes when data is added on different devices
//add features to show year wehn displaying BTD
//testing
//incorrect date display edge?
//store credentials
//BUG: wrong Date Entry
//fix OTB moment
//show recent transactions, then onclick, show all transactions. 
//no zero transaction values
//================================
//REFACTOR
//bug in delete trans when show BTD
//extract input components
//fix id's & classNames for formInputs
//===========================
//MODAL
//perhaps add modal types => succes, delete, update, edit for easy reuse and readability
//add id modal to code for accessiblity stuff and class for targeting styles
//Form
// Optimize extra renders in Form.js...Maybe

//show BTD can be show more once less view is implemented=> maybe add a scroll in styling