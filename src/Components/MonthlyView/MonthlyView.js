import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import MonthlyViewHeader from "../MonthlyViewHeader/MonthlyViewHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import moment from "moment";

const MonthlyView = props => {
  const [transactions] = useContext(TransContext);
  const [date, setDate] = useState(moment().format("MMMM YYYY"));
  const [monthlyTransactions, setMonthlyTransactions] = useState([]);

  // Filter Transactions
  useEffect(() => {
    setMonthlyTransactions(
      transactions.filter(
        trans => moment(trans.date).format("MMMM YYYY") === date
      )
    );
  }, [date, transactions]);

  return (
    <Grid container>
      <Grid container>
        <MonthlyViewHeader date={date} setDate={setDate} />
        <TransactionList transactions={monthlyTransactions} />
      </Grid>

      <RunningTotal
        currentTransactions={monthlyTransactions}
        transactions={transactions}
      />
    </Grid>
  );
};

export default MonthlyView;
