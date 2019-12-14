import React, { useState, useEffect, useContext } from "react";
import { getTransactions } from "../../Components/Helpers/DBHelper";
import { CloseModalButton } from "../../Components/Modal/Modal";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import MonthHeader from "../MonthHeader/MonthHeader";
import TodayButton from "../TodayButton/TodayButton";
import TransactionList from "../TransactionList/TransactionList";
import { ModalContext } from "../../App";
import Grid from "@material-ui/core/Grid";
import styles from "./style.main";
import { withStyles } from "@material-ui/core/styles";
import AddButton from "../AddButton/AddButton";
import GoToButton from "../GoToButton/GoToButton"
import moment from "moment";

const Main = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [runningTotal, setRunningTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState(moment().format("M"));
  const [year, setYear] = useState(moment().format("YYYY"));
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  
  const { classes } = props;

  // Get user transactions from dbase
  useEffect(() => { 
    getTransactions()
    .then(r => setTransactions(r))
    .catch(err =>
      showModal({
        show: true,
        type: "error",
        text: err,
        title: "Error Fetching Transactions!",
        content: <CloseModalButton autofocus={true} variant="contained" />
      })
    );
  }, []);
     

  // Calculate the totals of all the transactions when the list of transactions change 
  useEffect(() => {
    const calcRunningTotal = () => {
      let rt = 0;
      transactions.forEach(trans => {
        rt += Number(trans.amount);
      });
      setRunningTotal(rt);
    };
    calcRunningTotal();
  }, [transactions]);


  // Filter Monthly transactions & calculate total when month, year or transactions change
  useEffect(() => {
    const filterMonthlyTransactions = () => {
      const mt = transactions.filter(transaction => {
        return (
          moment(transaction.date).format("YYYY") === String(year) &&
          moment(transaction.date).format("M") === String(month)
        );
      });

      // calculate monthly total or 0 to prevent N&N(no transactions)
      setMonthlyTotal(mt.reduce((acc, red) => Number(acc.amount) + Number(red.amount), 0) || 0);
      return mt;
    }
    setMonthlyTransactions(filterMonthlyTransactions());
  },[month, year, transactions]);


  return (
    <Grid component="main" container className={classes.main}>
      <Grid container className={classes.top}>
        <Grid container>
          <MonthHeader month={month} year={year} setMonth={setMonth} setYear={setYear} />
          <TransactionList MonthlyTransactions={monthlyTransactions} />
        </Grid>
        
        <RunningTotal runningTotal={runningTotal} monthlyTotal={monthlyTotal} />
      </Grid>
      
      <Grid container justify='flex-end'>
        <TodayButton setMonth={setMonth} setYear={setYear}>Today</TodayButton>
        <GoToButton setMonth={setMonth} setYear={setYear}>GoTo</GoToButton>
        <AddButton setTransactions={setTransactions} />
      </Grid>
        
    </Grid>
  );
};

export default withStyles(styles)(Main);