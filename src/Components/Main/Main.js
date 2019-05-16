import React, { useState, useEffect, useContext } from "react";
import Month from "../../Components/Month/Month.js";
import { getTransactions } from "../../Components/Helpers/DBHelper";
import { CloseModalButton } from "../../Components/Modal/Modal";
import TransactionForm from "../../Components/Transactions/TransactionForm";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import { ModalContext } from "../../App";
import Grid from "@material-ui/core/Grid";
import styles from "./style.main";
import { withStyles } from "@material-ui/core/styles";


const Main = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [runningTotal, setRunningTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const { classes } = props;

  const showAddForm = () => {
    showModal({
      show: true,
      type: "add",
      title: "New Transaction",
      content: <TransactionForm saf = {showAddForm} setTransactions={setTransactions} type="add" />
    });
  };

  const calcRunningTotal = () => {
    let rt = 0;
    transactions.forEach(trans => {
      rt += Number(trans.amount);
    });

    setRunningTotal(rt);
  };

  useEffect(() => {
    getTransactions()
      .then(r => setTransactions(r))
      .catch(err => showModal({
        show: true,
        type: 'error',
        text: err,
        title: 'Error Fetching Transactions!',
        content: <CloseModalButton />
      }))
  }, []);

  useEffect(() => {
    calcRunningTotal();
  }, [transactions]);

  return (
    <>
      <Grid component="main" className={classes.main}>
        <Month
          setMonthlyTotal={setMonthlyTotal}
          setTransactions={setTransactions}
          transactions={transactions}
          showAddForm={showAddForm}
        />

        <Grid>
          <RunningTotal
            runningTotal={runningTotal}
            monthlyTotal={monthlyTotal}
          />

        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Main);
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
// show stats: total income/spent per month & year => maybe graph spending

//============== AUTENTICATION NOTES=====================
//login & sign up forms
// what to show without an account => landing page
//Redirect to app page
//same email address?

//===============Firestore===================
//Security Rules
//ID's empty in transaction??
