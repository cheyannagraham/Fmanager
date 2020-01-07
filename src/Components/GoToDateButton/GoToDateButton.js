import React, { useContext } from "react";
import styles from "./styles.gotobutton";
import { withStyles } from "@material-ui/core/styles";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import Fab from "@material-ui/core/Fab";
import DateRange from "@material-ui/icons/DateRange";

const GoToButton = props => {
  const { classes } = props;
  let showModal = useContext(ModalContext).setShowModal;

  const validateDate = (e) => {
    e.preventDefault();
    const month = document.querySelector("#goto-month").value;
    const year = document.querySelector("#goto-year").value;
    if (RegExp("^[0-9]{4}$").test(year) && (RegExp("^[0-9]{2}$").test(month))) {
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
          <label htmlFor="goto-month">Month</label>
          <input
            type="number"
            min="1"
            max="12"
            step="1"
            id="goto-month"
            required></input>

          <label htmlFor="goto-year">Year</label>
          <input type="number" id="goto-year" required></input>
        </form>
      ),
      actions: (
        <>
          <button type="submit" form="goto-date-form" onClick={validateDate}>Go</button>
          <CloseModalButton />
        </>
      )
    });
  };

  return (
    <Fab className={classes["fab-container"]} size="small" color="primary" aria-label="goto-date" title="Go To Date" onClick={handleClick}>
      <DateRange />
    </Fab>
  );
};

export default withStyles(styles)(GoToButton);
