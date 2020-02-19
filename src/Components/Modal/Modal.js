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
  return (
    <Dialog
      maxWidth="sm"
      open={props.content.show}
      id="modal-dialog"
    >
      <Box textAlign="center">
        <DialogTitle>{props.content.title}</DialogTitle>
        <DialogContentText>
          {props.content.text}
        </DialogContentText>
        <DialogContent>{props.content.content}</DialogContent>
        <DialogActions>
          <Box m={1} display="flex" justifyContent="space-between">
            {props.content.actions}
            {props.content.closeAction && <CloseModalButton />}
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export const CloseModalButton = props => {
  const modalContent = useContext(ModalContext).setModalContent;
  return (
    <Button variant="contained" onClick={() => modalContent(false)} {...props}>
      Close{" "}
    </Button>
  );
};

export default Modal;
