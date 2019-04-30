import React, { useContext } from "react";
import moment from "moment";
import { deleteTransaction, getTransactions } from "../Helpers/DBHelper";
import { ModalContext } from "../../App";
import TransactionForm from "./TransactionForm";
import style from "../../CSS/transactionlist.module.css";
import TransactionItem from "./TransactionItem";
import Button from "@material-ui/core/Button";
import { CloseModalButton } from "../Modal/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.transactionlist";

const TransactionList = props => {
  let total = 0;
  const showModal = useContext(ModalContext).setShowModal;
  const { classes } = props;

  const sortTransactions = () => {
    props.MonthlyTransactions.sort((prev, next) => {
      return moment(next.date) - moment(prev.date);
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
          <CloseModalButton onClick={() => handleDelete(id)}>
            
            Confirm
          </CloseModalButton>
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
          actions: <CloseModalButton />
        });
        getTransactions().then(results => props.setTransactions(results));
      })
      .catch(err =>
        showModal({
          show: true,
          type: "error",
          title: "Delete Error!",
          text: err,
          actions: <CloseModalButton />
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

  const typProps = {
    variant: "h6",
    align: "center",
    color: "secondary"
  };

  return (
    sortTransactions(),
    (
      <Paper className = {classes.paper}>
        <List id="transaction-list" className={classes["trans-list"]}>
          {/* intentionally empty */}
          <ListItem> </ListItem>

          <ListItem>
            <ListItemText primaryTypographyProps={typProps} primary="Date" />
          </ListItem>

          <ListItem>
            <ListItemText
              primaryTypographyProps={typProps}
              primary="Business"
            />
          </ListItem>

          <ListItem>
            <ListItemText primaryTypographyProps={typProps} primary="Amount" />
          </ListItem>

          <ListItem> </ListItem>
        </List>

        <Divider />

        {props.MonthlyTransactions.length > 0 ? (
          props.MonthlyTransactions.map(trans => {
            total += Number(trans.amount);

            return (
              <TransactionItem
                confirmDelete={confirmDelete}
                updateTransaction={updateTransaction}
                trans={trans}
                key={trans.id}
              />
            );
          })
        ) : (
            <Grid id={style.empty}>
              <Typography variant='body1' color="secondary" align='center'>No Transactations</Typography>
            </Grid>
          )}

        {props.setMonthlyTotal(total)}
      </Paper>
    )
  );
};

export default withStyles(styles)(TransactionList);
