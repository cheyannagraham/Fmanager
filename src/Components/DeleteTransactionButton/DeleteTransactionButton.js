import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.deletetransactionbutton";
import { deleteTransaction } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { TransContext } from "../../App/App";

const DeleteTransaction = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [transactions, setTransactions] = useContext(TransContext);
  const { classes } = props;

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
        setTransactions(transactions.filter(trans => trans.id !== id));
        showModal({
          show: true,
          title: "Delete Successful!",
          type: "success",
          text: res,
          actions: <CloseModalButton autoFocus={true} variant="contained" />
        });
      })
      .catch(err =>
        showModal({
          show: true,
          type: "error",
          title: "Delete Error!",
          text: err,
          actions: <CloseModalButton autoFocus={true} />
        })
      );
  };

  return (
    <Grid item xs={2} className={classes.right}>
      <IconButton
        color="primary"
        title="Delete Transaction"
        onClick={() => confirmDelete(props.transaction.id)}
      >
        <Delete className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default withStyles(styles)(DeleteTransaction);
