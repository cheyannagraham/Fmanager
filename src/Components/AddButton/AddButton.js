import React, { useContext } from "react";
import AddRounded from "@material-ui/icons/AddRounded";
import { ModalContext } from "../../App/App";
import TransactionForm from "../TransactionForm/TransactionForm";
import Fab from "@material-ui/core/Fab"
import Box from "@material-ui/core/Box"

const AddButton = props => {
  const modalContent = useContext(ModalContext);

  const handleClick = () => {
    modalContent({
      show: true,
      type: "add",
      title: "New Transaction",
      content: <TransactionForm saf={handleClick} type="add" />,
    });
  };

  return (
    <Box m={2}>

    <Fab
      title="Add New Transaction"
      aria-label="add transaction"
      size="small"
      onClick={handleClick}
    >
      <AddRounded />
    </Fab>
    </Box>
  );
};

export default AddButton;
