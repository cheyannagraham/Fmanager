import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles.addbutton";
import { ModalContext } from "../../App/App";
import TransactionForm from "../TransactionForm/TransactionForm";

const AddButton = props => {
  const { classes } = props;
  const showModal = useContext(ModalContext).setShowModal;

  const handleClick = () => {
    showModal({
      show: true,
      type: "add",
      title: "New Transaction",
      content: <TransactionForm saf={handleClick} type="add" />
    });
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      title="Add New Transaction"
      aria-label="add transaction"
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default withStyles(styles)(AddButton);
