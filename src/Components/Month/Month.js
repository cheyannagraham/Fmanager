import React, { useState, useEffect } from "react";
import TransactionList from "../Transactions/TransactionList";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import styles from "./style.month";
import { withStyles } from "@material-ui/core/styles";
import MonthHeader from '../MonthHeader/MonthHeader'


const Month = props => {
  // let current = {
  //   'month': moment().format("M"),
  //   'year': moment().format("YYYY")
  // }
  // const [month, setMonth] = useState(current.month);
  // const [year, setYear] = useState(current.year);
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  const getMonthlyTransactions = (newMonth = props.month, newYear = props.year) => {
    let mt = props.transactions.filter(transaction => {
      return (
        moment(transaction.date).format("YYYY") === String(newYear) &&
        moment(transaction.date).format("M") === String(newMonth)
        );
      });
      
    setMonthlyTransactions(mt);
  };

  //update monthly transactions if transaction list changes
  useEffect(() => {
    getMonthlyTransactions(props.month);
  }, [props.transactions]);

  const handleClick = e => {
    getMonth(e);
  };

  // Ensure months go from Dec > Jan & Jan < Dec
  const getMonth = val => {
    const monthVal = Number(props.month) + val;
    let newMonth = monthVal;
    let newYear = props.year;

    if (monthVal === 0) {
      newYear = Number(props.year) - 1;
      newMonth = 12;
    } else if (monthVal === 13) {
      newYear = Number(props.year) + 1;
      newMonth = 1;
    } 
    if(props.year !== newYear) props.setYear(newYear);
    props.setMonth(newMonth);
    getMonthlyTransactions(newMonth, newYear);
  };

  return (
    <Grid container>
      <MonthHeader handleClick = {handleClick} month = {props.month} year = {props.year} />

      <TransactionList
        setMonthlyTotal={props.setMonthlyTotal}
        MonthlyTransactions={monthlyTransactions}
        setTransactions={props.setTransactions}
      />
    </Grid>
  );
};

export default withStyles(styles)(Month);
