import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import FilteredHeader from "../FilteredViewHeader/FilteredViewHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import moment from "moment";

const FilteredView = props => {
  const [transactions] = useContext(TransContext);
  const [fromDate, setFromDate] = useState(moment().format("YYYY-MM-DD"));
  const [toDate, setToDate] = useState(moment().format("YYYY-MM-DD"));
  const [filteredTransactions, setfilteredTransactions] = useState([]);

  // Filter Transactions
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

export default FilteredView;