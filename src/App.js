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


  return <Month transactions = {totalTransactions} />
}

//TODO: 
// add input to change months,
// do math to show money spent
// figure out how to add entries