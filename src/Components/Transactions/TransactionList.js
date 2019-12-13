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
          <Button color="primary" variant="contained"
            onClick={() => handleDelete(id)}>
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
          actions: <CloseModalButton autofocus={true} />
        })
      );
  };

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

  // Create list of sorted Transaction Items
  const displayData = () => {
    const transObj = getDates();

     const data = sortDates(Object.keys(transObj)).map(date => (
        <Paper className={classes["trans-paper"]} key={date}>
          <Typography color="primary" className={classes.date}>
            {moment(date).format("MMM DD")}
          </Typography>

          {transObj[date].map(trans => {

            return (
              <TransactionItem
                confirmDelete={confirmDelete}
                updateTransaction={updateTransaction}
                trans={trans}
                key={trans.id}
              />
            );
          })}
        </Paper>
      ));
      return data;
    }
  

  return (
      <Grid className={classes['trans-content']}>
        {displayData()}
        {props.MonthlyTransactions.length === 0 &&
          <Typography color="primary">
            No Transactions
          </Typography>
        }
      </Grid>
    )
};

export default withStyles(styles)(TransactionList);