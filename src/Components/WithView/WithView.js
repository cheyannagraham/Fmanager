import React, { useState, useEffect, useContext } from "react";
import Box from "@material-ui/core/Box";
import WithViewHeader from "./WithViewHeader";
import TransactionList from "../TransactionList/TransactionList";
import { TransContext } from "../../App/App";
import RunningTotal from "../RunningTotal/RunningTotal";
import BottomBar from "../BottomBar/BottomBar";
import moment from "moment";

const WithView = props => {
  const [transactions] = useContext(TransContext);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [currentTransactions, setCurrentTransactions] = useState([]);

  // Filter Transactions by month or day
  useEffect(() => {
    setCurrentTransactions(
      transactions.filter(trans =>
        props.view === "monthly"
          ? moment(trans.date).format("YYYY-MM") ===
            moment(date).format("YYYY-MM")
          : moment(trans.date).format("YYYY-MM-DD") ===
            moment(date).format("YYYY-MM-DD")
      )
    );
  }, [date, transactions, props.view]);

  return (
    <Box display="grid" width="100%">
      <WithViewHeader view={props.view} date={date} setDate={setDate} />
      <TransactionList transactions={currentTransactions} />

      <BottomBar>
        <RunningTotal
          currentTransactions={currentTransactions}
          transactions={transactions}
        />
      </BottomBar>
    </Box>
  );
};

export default WithView;
