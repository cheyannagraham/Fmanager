import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import moment from "moment";
import DailyViewHeader from "../DailyViewHeader/DailyViewHeader";

const DailyView = props => {
  const [transactions] = useContext(TransContext);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [dailyTransactions, setDailyTransactions] = useState([]);

  // Filter Transactions
  useEffect(() => {
    setDailyTransactions(
      transactions.filter(
        trans => moment(trans.date).format("YYYY-MM-DD") === date
      )
    );
  }, [date, transactions]);

  return (
    <Grid container>
      <Grid container>
        <DailyViewHeader date={date} setDate={setDate} />
        <TransactionList transactions={dailyTransactions} />
      </Grid>

      <RunningTotal
        currentTransactions={dailyTransactions}
        transactions={transactions}
      />
    </Grid>
  );
};

export default DailyView;
