import React, { useState, useEffect } from "react";
import TransactionList from "../Transactions/TransactionList";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import styles from "./style.month";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Typography from '@material-ui/core/Typography';


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
      
      <Grid container justify = "center" className={classes["month-header"]}>

        <IconButton color='primary' size='large' onClick={() => { handleClick(-1); }}>
          <ArrowLeft className = {classes.icon} />
        </IconButton>

        <Typography color="secondary" variant = 'h4' className={classes['month-title']}>{`${moment(month, "MM").format(
          "MMMM"
        )} ${year}`}
        </Typography>

        <IconButton color='primary' size='large' onClick={() => { handleClick(1); }}>
          <ArrowRight className = {classes.icon}/>
        </IconButton>

      </Grid>

      <TransactionList
        setMonthlyTotal={props.setMonthlyTotal}
        MonthlyTransactions={monthlyTransactions}
        setTransactions={props.setTransactions}
      />
    </Grid>
  );
};

export default withStyles(styles)(Month);

