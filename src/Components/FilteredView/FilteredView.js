import React, { useState, useEffect, useContext } from "react";
import Box from "@material-ui/core/Box";
import FilteredViewHeader from "./FilteredViewHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import BottomBar from "../BottomBar/BottomBar";
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
    <Box display="grid" width="100%">
      <FilteredViewHeader
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
      <TransactionList transactions={filteredTransactions} fullDate={true} />

      <BottomBar>
        <RunningTotal
          currentTransactions={filteredTransactions}
          transactions={transactions}
        />
      </BottomBar>
    </Box>
  );
};

export default FilteredView;
