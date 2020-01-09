import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import DateRange from "@material-ui/icons/DateRange";
import withStyles from "@material-ui/core/styles/withStyles";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { FormControl } from "../FormControls/FormControls";
import styles from "./styles.gotobutton";

const GoToButton = props => {
  const { classes } = props;
  let showModal = useContext(ModalContext).setShowModal;

  const validateDate = e => {
    e.preventDefault();
    const month = document.querySelector("#goto-month").value;
    const year = document.querySelector("#goto-year").value;
    if (RegExp("^[0-9]{4}$").test(year) && RegExp("^[0-9]{2}$").test(month)) {
      showModal({ show: false });
      props.setMonth(month);
      props.setYear(year);
    } else {
      document.querySelector("#modal-help-text").innerHTML =
        "Invalid Format. Correct Usage: MM YYYY";
    }
  };

  const handleClick = () => {
    showModal({
      show: true,
      title: "Go To Date",
      content: (
        <form id="goto-date-form">
          <FormControl
            variant="outlined"
            label="Month"
            type="number"
            min="1"
            max="12"
            step="1"
            id="goto-month"
            required
            autoFocus
          />

          <FormControl
            variant="outlined"
            label="Year"
            type="number"
            id="goto-year"
            required
          />
        </form>
      ),
      actions: (
        <>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            form="goto-date-form"
            onClick={validateDate}
          >
            Go
          </Button>
          <CloseModalButton />
        </>
      )
    });
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="goto-date"
      title="Go To Date"
      onClick={handleClick}
    >
      <DateRange />
    </Fab>
  );
};

export default withStyles(styles)(GoToButton);
