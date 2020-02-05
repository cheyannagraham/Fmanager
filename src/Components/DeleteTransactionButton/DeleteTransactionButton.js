import React, { useContext } from "react";
import { withSnackbar } from "notistack";

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
            onClick={() => {
              showModal({ show: false });
              handleDelete(id);
            }}
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
        props.enqueueSnackbar("Delete Sucessful!", {
          variant: "success"
        });
        throw new Error("me :)");
      })
      .catch(err => {
        const sbar = props.enqueueSnackbar("Deletion Error!", {
          variant: "error",
          action: (
            <>
              <Button
                onClick={() => {
                  props.closeSnackbar(sbar);
                  showModal({
                    show: true,
                    title: err.name,
                    type: "error",
                    actions: <CloseModalButton autoFocus={true} />,
                    text: err.message
                  });
                }}
              >
                Info
              </Button>
            </>
          )
        });
      });
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

export default withStyles(styles)(withSnackbar(DeleteTransaction));
