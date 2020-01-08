import React, { useContext } from "react";
import withStyles from "@material-ui/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Edit from "@material-ui/icons/Edit";
import TransactionForm from "../TransactionForm/TransactionForm";
import { ModalContext } from "../../App/App";
import styles from "./styles.updatetransaction";

const UpdateTransaction = props => {
  const { classes } = props;
  const showModal = useContext(ModalContext).setShowModal;

  const handleClick = () => {
    showModal({
      show: true,
      title: "Change Transaction",
      type: "update",
      content: (
        <TransactionForm
          setTransactions={props.setTransactions}
          currentTransaction={props.transaction}
          type="update"
        />
      )
    });
  };

  return (
    <Grid item xs={2}>
      <IconButton
        title="Edit Transaction"
        color="primary"
        onClick={handleClick}
      >
        <Edit className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default withStyles(styles)(UpdateTransaction);
