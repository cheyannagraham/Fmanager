import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import DateRangeRounded from "@material-ui/icons/DateRangeRounded";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { FormControl } from "../FormControls/FormControls";
import WithFab from "../WithFab/WithFab";

const GoToButton = props => {
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
    <WithFab
      aria-label="goto-date"
      title="Go To Date"
      handleClick={handleClick}
    >
      <DateRangeRounded />
    </WithFab>
  );
};

export default GoToButton;
