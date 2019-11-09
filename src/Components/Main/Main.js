import React, { useState, useEffect, useContext } from "react";
import Month from "../../Components/Month/Month.js";
import { getTransactions } from "../../Components/Helpers/DBHelper";
import { CloseModalButton } from "../../Components/Modal/Modal";
import TransactionForm from "../../Components/Transactions/TransactionForm";
import RunningTotal from "../../Components/RunningTotal/RunningTotal";
import { ModalContext } from "../../App";
import Grid from "@material-ui/core/Grid";
import styles from "./style.main";
import { withStyles } from "@material-ui/core/styles";
import AddButton from "../AddButton/AddButton.js";

const Main = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [runningTotal, setRunningTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const { classes } = props;

  const showAddForm = () => {
    showModal({
      show: true,
      type: "add",
      title: "New Transaction",
      content: (
        <TransactionForm
          saf={showAddForm}
          setTransactions={setTransactions}
          type="add"
        />
      )
    });
  };

  const calcRunningTotal = () => {
    let rt = 0;
    transactions.forEach(trans => {
      rt += Number(trans.amount);
    });

    setRunningTotal(rt);
  };

  useEffect(() => {
    getTransactions()
      .then(r => setTransactions(r))
      .catch(err =>
        showModal({
          show: true,
          type: "error",
          text: err,
          title: "Error Fetching Transactions!",
          content: <CloseModalButton autofocus={true} variant="contained" />
        })
      );
  }, []);

  useEffect(() => {
    calcRunningTotal();
  }, [transactions]);

  return (
    <Grid component="main" container className={classes.main}>
      <Grid container className={classes.top}>
        <Month
          setMonthlyTotal={setMonthlyTotal}
          setTransactions={setTransactions}
          transactions={transactions}
        />

        <RunningTotal runningTotal={runningTotal} monthlyTotal={monthlyTotal} />
      </Grid>

        <AddButton showAddForm={showAddForm} />
        
    </Grid>
  );
};

export default withStyles(styles)(Main);