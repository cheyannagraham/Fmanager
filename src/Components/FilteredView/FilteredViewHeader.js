import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import { FormControl } from "../FormControls/FormControls";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = withStyles({
  label: {
    "font-size": "1.3em",
    "font-weight": "500"
  },
  h1: {
    "font-size": "1.3rem",
    "text-transform": "capitalize"
  },
});

const FilteredViewHeader = useStyles((props) => {
  let modalContent = useContext(ModalContext);

  const getDate = (input) => {
    modalContent({
      show: true,
      title: `Set ${input.label}`,
      content: (
        <form id={`${input.label}-form`} onChange={setDate}>
          <FormControl
            variant="outlined"
            label={input.label}
            type="date"
            id={`${input.id}-input`}
            defaultValue={input.date}
            required
            autoFocus
          />
        </form>
      ),
      actions: <CloseModalButton form={`${input.label}-form`} type="submit" />,
    });
  };

  const setDate = (event) => {
    const value = event.target.value;
    // search for the word start in id to determine which value to set
    if (event.target.id.toLowerCase().search("start") === -1) {
      props.setEndDate(value);
    } else {
      props.setStartDate(value);
    }
  };

  const DisplayButton = (props) => {
    const id = props.label.split(" ").join("-").toLowerCase();
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        width="100%"
        alignItems="center"
        my={1}
      >
        <FormLabel className={props.classes.label} htmlFor={id}>
          {props.label}:{" "}
        </FormLabel>
        <Button
          onClick={() =>
            getDate({ label: props.label, id: id, date: props.date })
          }
          id={id}
        >
          <Typography variant="h1" className={props.classes.h1}>
            {moment(props.date).format("MMM D, YYYY")}
          </Typography>
        </Button>
      </Box>
    );
  };

  return (
    <Box my={3} display="flex" flexWrap="wrap" width="100%" justifyContent="center">
      <DisplayButton
        label="Start Date"
        classes={props.classes}
        date={props.startDate}
      />
      <DisplayButton
        label="End Date"
        classes={props.classes}
        date={props.endDate}
      />
    </Box>
  );
});

export default FilteredViewHeader;
