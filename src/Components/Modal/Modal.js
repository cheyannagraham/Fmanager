import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import withStyles from "@material-ui/core/styles/withStyles";
import { ModalContext } from "../../App/App";
import styles from "./styles.modal";

const Modal = props => {
  const { classes } = props;

  return (
    <Dialog
      maxWidth="sm"
      className={classes.dialog}
      open={props.content.show}
      id="modal-dialog"
    >
      <DialogTitle>{props.content.title}</DialogTitle>
      <DialogContentText className={classes.text}>
        {props.content.text}
      </DialogContentText>
      <p id="modal-help-text"></p>
      <DialogContent>{props.content.content}</DialogContent>
      <DialogActions>{props.content.actions}</DialogActions>
    </Dialog>
  );
};

export const CloseModalButton = props => {
  const showModal = useContext(ModalContext).setShowModal;
  return (
    <Button
      variant="contained"
      onClick={() => showModal(false)}
      {...props}
    >
      Close{" "}
    </Button>
  );
};

export default withStyles(styles)(Modal);
