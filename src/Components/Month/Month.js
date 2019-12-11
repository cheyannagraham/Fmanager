import React, { useState, useEffect } from "react";
import TransactionList from "../Transactions/TransactionList";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import styles from "./style.month";
import { withStyles } from "@material-ui/core/styles";
import MonthHeader from '../MonthHeader/MonthHeader'


const Month = props => {
  let current = {
    'month': moment().format("M"),
    'year': moment().format("YYYY")
  }
  const [month, setMonth] = useState(current.month);
  const [year, setYear] = useState(current.year);
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  const getMonthlyTransactions = (newMonth = month, newYear = year) => {
    let mt = props.transactions.filter(transaction => {
      return (
        moment(transaction.date).format("YYYY") === String(newYear) &&
        moment(transaction.date).format("M") === String(newMonth)
        );
      });
      
    setMonthlyTransactions(mt);
  };

  useEffect(() => {
    getMonthlyTransactions(month);
  }, [props.transactions]);

  const handleClick = e => {
    getMonth(e);
  };

  // Ensure months go from Dec > Jan & Jan < Dec
  const getMonth = val => {
    const monthVal = Number(month) + val;
    let newMonth = monthVal;
    let newYear = year;

    if (monthVal === 0) {
      newYear = Number(year) - 1;
      newMonth = 12;
    } else if (monthVal === 13) {
      newYear = Number(year) + 1;
      newMonth = 1;
    } 
    if(year !== newYear) setYear(newYear);
    setMonth(newMonth);
    getMonthlyTransactions(newMonth, newYear);
  };

  return (
    <Grid container>
      <MonthHeader handleClick = {handleClick} month = {month} year = {year} />

      <TransactionList
        setMonthlyTotal={props.setMonthlyTotal}
        MonthlyTransactions={monthlyTransactions}
        setTransactions={props.setTransactions}
      />
    </Grid>
  );
};

export default withStyles(styles)(Month);
