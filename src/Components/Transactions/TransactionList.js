import React, { useContext } from "react";
import moment from "moment";
import { deleteTransaction, getTransactions } from "../Helpers/DBHelper";
import { ModalContext } from "../../App";
import TransactionForm from "./TransactionForm";
import TransactionItem from "./TransactionItem";
import Button from "@material-ui/core/Button";
import { CloseModalButton } from "../Modal/Modal";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
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

  return (
    sortTransactions(),
    (
      <Paper className={classes.paper}>
        <Table
          padding="dense"
          id="transaction-list"
          className={classes["table"]}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={2}
                className={classes["thead-cell"]}
                align="center"
              >
                Date
              </TableCell>

              <TableCell className={classes["thead-cell"]} align="center">
                Business
              </TableCell>

              <TableCell
                colSpan={2}
                className={classes["thead-cell"]}
                align="center"
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
              <TableRow>
                <TableCell
                  className={classes["tcell-no-trans"]}
                  colSpan="100%"
                  align="center"
                >
                  No Transactions
                </TableCell>
              </TableRow>
            )}

            {props.setMonthlyTotal(total)}
          </TableBody>
        </Table>
      </Paper>
    )
  );
};

export default withStyles(styles)(TransactionList);
