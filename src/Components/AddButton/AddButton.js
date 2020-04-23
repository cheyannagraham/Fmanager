import React, { useContext } from "react";
import AddRounded from "@material-ui/icons/AddRounded";
import { ModalContext } from "../../App/App";
import TransactionForm from "../TransactionForm/TransactionForm";
import Fab from "@material-ui/core/Fab";

const AddButton = props => {
  const modalContent = useContext(ModalContext);

  const handleClick = () => {
    modalContent({
      show: true,
      type: "add",
      title: "New Transaction",
      content: <TransactionForm saf={handleClick} type="add" />
    });
  };

  return (
    <Fab
      title="Add New Transaction"
      aria-label="add transaction"
      size="small"
      color="secondary"
      onClick={handleClick}
    >
      <AddRounded />
    </Fab>
  );
};

export default AddButton;
