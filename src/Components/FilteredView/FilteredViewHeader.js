import React from "react";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import { FormControl } from "../FormControls/FormControls";
import moment from "moment";

const useStyles = withStyles({
  input: {
    "font-size": "1.2rem",
  },
  label: {
    "font-size": "1.7rem",
  },
});

const FilteredViewHeader = useStyles((props) => {
  const handleChange = (event) => {
    const input = event.target.id;
    const value = event.target.value;
    if (input === "start-date") {
      props.setFromDate(value);
    } else {
      props.setToDate(value);
    }
  };

  return (
    <Box mt={3}>
      <form onChange={handleChange}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
          <FormControl
            label="Start Date"
            InputLabelProps={{ className: props.classes.label }}
            inputProps={{ className: props.classes.input }}
            type="date"
            name="start-date"
            id="start-date"
            defaultValue={moment().format("YYYY-MM-DD")}
            required
          />
          <FormControl
            label="End Date"
            InputLabelProps={{ className: props.classes.label }}
            inputProps={{ className: props.classes.input }}
            type="date"
            name="end-date"
            id="end-date"
            defaultValue={moment().format("YYYY-MM-DD")}
            required
          />
        </Box>
      </form>
    </Box>
  );
});

export default FilteredViewHeader;
