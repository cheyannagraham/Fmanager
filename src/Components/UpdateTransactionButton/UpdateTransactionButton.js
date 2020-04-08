import React, { useContext } from "react";
import withStyles from "@material-ui/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import TransactionForm from "../TransactionForm/TransactionForm";
import { ModalContext } from "../../App/App";
import styles from "./styles.updatetransactionbutton";

const UpdateTransaction = props => {
  const { classes } = props;
  const modalContent = useContext(ModalContext);

  const handleClick = event => {
    modalContent({
      show: true,
      title: "Update Transaction",
      type: "update",
      content: (
        <TransactionForm currentTransaction={props.transaction} type="update" />
      )
    });
  };

  return (
      <IconButton title="Edit Transaction" onClick={handleClick}>
        <Edit className={classes.icon} />
      </IconButton>
  );
};

export default withStyles(styles)(UpdateTransaction);
