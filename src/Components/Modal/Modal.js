import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { ModalContext } from "../../App/App";

const Modal = props => {
  const modalContent = useContext(ModalContext);

  return (
    <Dialog
      maxWidth="sm"
      open={props.content.show}
      id="modal-dialog"
      onClose={() => modalContent(false)}
      aria-describedby={props.content.description}
      aria-labelledby={props.content.label}
    >
      <Box textAlign="center">
        <DialogTitle>{props.content.title}</DialogTitle>
        <DialogContentText>{props.content.text}</DialogContentText>
        <DialogContent>{props.content.content}</DialogContent>
        <DialogActions>
          {props.content.actions}
          {props.content.closeAction && <CloseModalButton />}
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export const CloseModalButton = props => {
  const modalContent = useContext(ModalContext);
  return (
    <Button variant="outlined" color="primary" onClick={() => modalContent(false)} {...props}>
      Close
    </Button>
  );
};

export default Modal;
