import React, { useState, useEffect } from 'react';
import Month from './Components/Month/Month.js';
import {getTransactions} from './Components/Helpers/DBHelper';
import Modal from './Components/Modal/Modal'
import TransactionForm from './Components/Transactions/TransactionForm';
import RunningTotal from './Components/RunningTotal/RunningTotal';
import style from './CSS/app.module.css';
import Footer from './Components/Footer/Footer';
//import OTB from './Components/OutstandingBalance/OutstandingBalance';

export const ModalContext = React.createContext(false);


const App = () => {
  const [showModal,setShowModal] = useState({show: false});
  const [runningTotal,setRunningTotal] = useState(0);
  const [monthlyTotal,setMonthlyTotal] = useState(0);
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
    getTransactions()
    .then(r => setTransactions(r))
    .catch(err => setShowModal(
      {show:true,status:'error',content:err,type:'alert'}))    
  }, []);


  useEffect(() => {
    calcRunningTotal();
  },[transactions]);
  //Fix mixture. Some have buttons that render, others render with state to show content. 

  return (
    <ModalContext.Provider value = {{setShowModal}}>
      <div id = {style.main}>
      
        {showModal.show && <Modal content = {showModal} /> }

        <Month setMonthlyTotal = {setMonthlyTotal} setTransactions = {setTransactions} transactions={transactions} />

        <div id = {style.totals}>

          <RunningTotal runningTotal = {runningTotal} monthlyTotal = {monthlyTotal}/>

            <button className = {style.button} onClick = {showAddForm}>
              <i className = {`material-icons ${style.icon}`}>add</i>
            </button>

        {/* <OTB allTrans = {transactions} month = {''} /> */}
        </div>


      </div>  
      
      <Footer />

    </ModalContext.Provider>

    
  );
};

export default App;
//TODO: see about caching firebase requests
//add better error messages for validation
//add better validation for mal scripts
//Maybe add a delete all? 
//signin features? 
//css pseudo classes for validation
//transactionlist renders even if props don't chanege(month rerenders)
//consider if anything needs to be done regarding reflecting changes when data is added on different devices
//testing
//incorrect date display edge?
//store credentials
//fix OTB moment
//show recent transactions, then onclick, show all transactions. 
//================================
//REFACTOR
//bug in delete trans when show BTD
//===========================
//MODAL
//perhaps add modal types => succes, delete, update, edit for easy reuse and readability
//add id modal to code for accessiblity stuff and class for targeting styles
//Form
// Optimize extra renders in Form.js...Maybe

//show BTD can be show more once less view is implemented=> maybe add a scroll in styling

// add click/hover animations to buttons
//add pure components
//add titles to modals...maybe

//test for failed conditions
// typing firebase fields
//use form[id] to get values 

//++++++++++++++++++++FEATURES++++++++++++++++++++
//show list of years and months onclick for faster scrolling.
//show all transactions for a year
// add add button to transaction completed to add another without going to main screen

//============== AUTENTICATION NOTES=====================
//login & sign up forms
// what to show without an account => landing page
//Redirect to app page
//same email address?
