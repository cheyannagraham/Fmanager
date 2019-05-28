import React, { useState, useEffect } from "react";
import TransactionList from "../Transactions/TransactionList";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import styles from "./style.month";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import Typography from "@material-ui/core/Typography";
import MonthHeader from '../MonthHeader/MonthHeader'

import AddButton from "../AddButton/AddButton";

const Month = props => {
  let currentMonth = moment().format("M");
  let currentYear = moment().format("YYYY");
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  const { classes } = props;

  const getMonthlyTransactions = newMonth => {
    let mt = props.transactions.filter(transaction => {
      return (
        moment(transaction.date).format("YYYY") === String(year) &&
        moment(transaction.date).format("M") === String(newMonth)
      );
    });

    setMonthlyTransactions(mt);
    setMonth(newMonth);
  };

  useEffect(() => {
    getMonthlyTransactions(month);
  }, [props.transactions]);

  const handleClick = e => {
    getMonth(e);
  };

  const getMonth = val => {
    const monthVal = Number(month) + val;
    let newMonth;
    let newYear;

    if (monthVal === 0) {
      newYear = year - 1;
      setYear(newYear);
      newMonth = 12;
    } else if (monthVal === 13) {
      newYear = year + 1;
      setYear(newYear);
      newMonth = 1;
    } else {
      newMonth = monthVal;
    }

    getMonthlyTransactions(newMonth);
  };

  return (
    <Grid className={classes["month-container"]}>
      <MonthHeader handleClick = {handleClick} month = {month} year = {year} />

      <TransactionList
        setMonthlyTotal={props.setMonthlyTotal}
        MonthlyTransactions={monthlyTransactions}
        setTransactions={props.setTransactions}
      />

      <AddButton showAddForm = {props.showAddForm} />

    </Grid>

  );
};

export default withStyles(styles)(Month);
