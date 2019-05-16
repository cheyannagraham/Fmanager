import React, { useContext } from "react";
import { ModalContext } from "../../App";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.modal";
import Grid from "@material-ui/core/Grid";

//type,status,cotent,show,callback

const Modal = props => {
  const { classes } = props;


  return (
    <Dialog
      open={props.content.show} id="modal-dialog"
    >

      <Grid className={classes.dialog}>
        <DialogTitle>{props.content.title}</DialogTitle>

        <DialogContentText>{props.content.text}</DialogContentText>
        
        <DialogContent>{props.content.content}</DialogContent>

        <DialogActions>{props.content.actions}</DialogActions>
      </Grid>
    </Dialog>
  );

  
};

const CloseModalButton = props => {
  const showModal = useContext(ModalContext).setShowModal;
  return (
    <Button
      color="secondary"
      variant={props.variant || "outlined"}
      autoFocus = {props.autofocus}
      onClick={() => showModal(false)}
    >
      Close{" "}
    </Button>
  );
};

export { CloseModalButton };
export default withStyles(styles)(Modal);
