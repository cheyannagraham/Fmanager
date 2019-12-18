import React, { useContext } from "react";
import { deleteTransaction, getTransactions } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import Button from "@material-ui/core/Button";
import { CloseModalButton } from "../Modal/Modal";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.deletetransaction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

const DeleteTransaction = props => {
  const showModal = useContext(ModalContext).setShowModal;
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
