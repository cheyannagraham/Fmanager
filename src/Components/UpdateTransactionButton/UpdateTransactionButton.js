import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import TransactionForm from "../TransactionForm/TransactionForm";
import { ModalContext } from "../../App/App";

const UpdateTransaction = props => {
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
      <IconButton title="Edit Transaction" onClick={handleClick} color={props.color}>
        <Edit />
      </IconButton>
  );
};

export default UpdateTransaction;
