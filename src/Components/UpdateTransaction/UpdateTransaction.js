import React, { useContext }from 'react';
import { withStyles } from "@material-ui/styles";
import styles from "./styles.updatetransaction";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import TransactionForm from "../Transactions/TransactionForm";
import { ModalContext } from "../../App";



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
        onClick={handleClick}>
        <Edit className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default withStyles(styles)(UpdateTransaction);