import React, { useState, useEffect, useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FilteredHeader from "../FilteredHeader/FilteredHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
// import styles from "./styles.filteredview";
import moment from "moment";

const styles = {};

const FilteredView = props => {
  const [transactions] = useContext(TransContext);
  const [fromDate, setFromDate] = useState(moment().format("YYYY-MM-DD"));
  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [filteredTransactions, setfilteredTransactions] = useState([]);

  const { classes } = props;

  // Filter Transactions if To or From date changes
  useEffect(() => {
    setfilteredTransactions(
      transactions.filter(
        trans => trans.date >= fromDate && trans.date <= toDate
      )
    );
  }, [fromDate, toDate, transactions]);

  return (
    <Grid container>
      <Grid container>
        <FilteredHeader
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />
        <TransactionList transactions={filteredTransactions} />
      </Grid>

      <RunningTotal
        currentTransactions={filteredTransactions}
        transactions={transactions}
      />
    </Grid>
  );
};

export default withStyles(styles)(FilteredView);
