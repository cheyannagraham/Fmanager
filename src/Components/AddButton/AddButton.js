import React, { useContext } from "react";
import AddRounded from "@material-ui/icons/AddRounded";
import { ModalContext } from "../../App/App";
import TransactionForm from "../TransactionForm/TransactionForm";
import WithFab from "../WithFab/WithFab";

const AddButton = props => {
  const showModal = useContext(ModalContext).setShowModal;

  const handleClick = () => {
    showModal({
      show: true,
      type: "add",
      title: "New Transaction",
      content: <TransactionForm saf={handleClick} type="add" />,
    });
  };

  return (
    <WithFab
      title="Add New Transaction"
      aria-label="add transaction"
      handleClick={handleClick}
    >
      <AddRounded />
    </WithFab>
  );
};

export default AddButton;
