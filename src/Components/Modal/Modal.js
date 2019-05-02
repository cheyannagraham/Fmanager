import React, { useContext } from "react";
import style from "../../CSS/modal.module.css";
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

//possible props
//type,status,cotent,show,callback

//consider passing callbacks in buttons onClick method and avoid confirm for delete

const Modal = props => {
  const { classes } = props;

  // const showModal = useContext(ModalContext).setShowModal;

  return (
    <Dialog
      open={props.content.show}
    >

      <Grid className={classes.dialog}>
        <DialogTitle>{props.content.title}</DialogTitle>

        <DialogContentText>{props.content.text}</DialogContentText>
        
        <DialogContent>{props.content.content}</DialogContent>

        <DialogActions>{props.content.actions}</DialogActions>
      </Grid>
    </Dialog>
  );

  //Render OK button with confirm Modal. send callback to Modal to invoke on confirmation
  //Use status in class Name to display different Styles on success & failures
  // return (
  //   <div id="modal" className={`${style.modal} ${style[props.content.type]} ${style[props.content.status]}`}>

  //     <h3 className={style.header}>{props.content.status}</h3>
  //     {typeof props.content.content === 'string' ?
  //       (<>
  //         <p className={style.p}>
  //           {props.content.content}
  //         </p>
  //         <CloseModalButton />
  //       </>
  //       ) :
  //       (props.content.content)
  //     }

  //     {/*delete confirmation*/}
  //     {props.content.type === "confirm" &&
  //       (<button className={style.button} onClick={() => {
  //         props.content.callback();
  //         showModal(false);
  //       }}>
  //         Confirm
  //       </button>
  //       )}

  //   </div>
  // );
};

const CloseModalButton = props => {
  const showModal = useContext(ModalContext).setShowModal;
  return (
    <Button
      color="secondary"
      variant="outlined"
      className={style.button}
      onClick={() => showModal(false)}
    >
      Close{" "}
    </Button>
  );
};

export { CloseModalButton };
export default withStyles(styles)(Modal);
