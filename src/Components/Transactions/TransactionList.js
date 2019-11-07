import React, { useContext } from "react";
import moment from "moment";
import { deleteTransaction, getTransactions } from "../Helpers/DBHelper";
import { ModalContext } from "../../App";
import TransactionForm from "./TransactionForm";
import TransactionItem from "./TransactionItem";
import Button from "@material-ui/core/Button";
import { CloseModalButton } from "../Modal/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.transactionlist";

const TransactionList = props => {
  let total = 0;
  const showModal = useContext(ModalContext).setShowModal;
  const { classes } = props;

  const getDates = () => {
    const dates = {};
    props.MonthlyTransactions.forEach(trans => {
      if (dates[trans.date]) {
        dates[trans.date].push(trans)
      }
      else {
        dates[trans.date] = [trans];
      }
    });
    return dates;
  };

  const sortDates = dates => {
    return dates.sort((prev, next) => {
      return moment(next) - moment(prev);
    });
  };

  const confirmDelete = id => {
    showModal({
      show: true,
      title: "Confirm Delete",
      text: "Are you sure you want to delete this transaction?",
      type: "confirm",
      actions: (
        <>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDelete(id)}
          >
            Confirm
          </Button>
          <CloseModalButton />
        </>
      )
    });
  };

  const handleDelete = id => {
    deleteTransaction(id)
      .then(res => {
        showModal({
          show: true,
          title: "Delete Successful!",
          type: "success",
          text: res,
          actions: <CloseModalButton autofocus={true} variant="contained" />
        });
        getTransactions().then(results => props.setTransactions(results));
      })
      .catch(err =>
        showModal({
          show: true,
          type: "error",
          title: "Delete Error!",
          text: err,
          actions: <CloseModalButton autofocus={true} variant="contained" />
        })
      );
  };

  //possible effect
  const updateTransaction = transaction => {
    showModal({
      show: true,
      title: "Change Transaction",
      type: "update",
      content: (
        <TransactionForm
          setTransactions={props.setTransactions}
          currentTransaction={transaction}
          type="update"
        />
      )
    });
  };

  const displayData = () => {
    const transObj = getDates();

    return (
      sortDates(Object.keys(transObj)).map(date => (
        <Paper className={classes["trans-paper"]} key={date}>
          <Grid className={classes["trans-date"]}>
            <Typography color="secondary" className={classes.date}>
              {moment(date).format("MMM DD")}
            </Typography>
          </Grid>

          {transObj[date].map(trans => {
            //calculate monthly total
            total += Number(trans.amount);

            return (
              <TransactionItem
                confirmDelete={confirmDelete}
                updateTransaction={updateTransaction}
                trans={trans}
                key={trans.id}
              />
            );
          })}
          {props.setMonthlyTotal(total)}
        </Paper>
      )))
  }

  return (
      <Grid color="secondary" className={classes['trans-content']}>
        {props.MonthlyTransactions.length > 0
        ?
        displayData()
        :
        <p>No Transactions</p>}
      </Grid>
    )
};

export default withStyles(styles)(TransactionList);
  //consider tables or lists for accessiblity.