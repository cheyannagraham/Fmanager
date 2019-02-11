import React, { useState, useEffect } from "react";
import "./App.css";
import Month from "./Components/Month/Month.js";

export default function App() {
  let [totalTransactions, setTotalTransactions] = useState(["No Transactions"]);

  useEffect(() => {
    fetch("./data.JSON")
    .then(res => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })
    .then(resp => {
      setTotalTransactions(resp);
    })
    .catch(error => error);

  },[]);
  
  return getMonthlyTransactions(totalTransactions);
}

const getMonthlyTransactions = (transactions) => {
  let month = new Date(Date.now()).getMonth();
  let monthlyTransactions = transactions.filter(
    transaction => new Date(transaction["date"]).getMonth() === month
  );

  return <Month transactions={monthlyTransactions} month={month} />;
}