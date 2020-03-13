import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.deletetransactionbutton";
import { deleteTransaction } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import { TransContext } from "../../App/App";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";
import Catch from "../Catch/Catch";

const DeleteTransaction = props => {
  const modalContent = useContext(ModalContext);
  const snackbar = useSnackbar();
  const [transactions, setTransactions] = useContext(TransContext);
  const { classes } = props;

  const confirmDelete = id => {
    modalContent({
      show: true,
      title: "Confirm Delete",
      text: "Are you sure you want to delete this transaction?",
      type: "confirm",
      actions: (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            modalContent({ show: false });
            handleDelete(id);
          }}
        >
          Confirm
        </Button>
      ),
      closeAction: true
    });
  };

  const handleDelete = id => {
    deleteTransaction(id)
      .then(() => {
        setTransactions(transactions.filter(trans => trans.id !== id));
        snackbar({
          text: "Transaction Deleted!",
          variant: "success"
        });
        throw new Error("me :)");
      })
      .catch(error =>
        snackbar({
          text: "Deletion Failed!",
          variant: "error",
          actions: (
            <Button
              onClick={() => {
                modalContent(Catch({ error: error }));
              }}
            >
              Info
            </Button>
          )
        })
      );
  };

  return (
    <Grid item xs={2} className={classes.right}>
      <IconButton
        title="Delete Transaction"
        onClick={() => confirmDelete(props.transaction.id)}
      >
        <Delete className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default withStyles(styles)(DeleteTransaction);
