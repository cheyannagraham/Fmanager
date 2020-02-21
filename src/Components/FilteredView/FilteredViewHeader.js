import React from "react";
import Box from "@material-ui/core/Box";
import { FormControl } from "../FormControls/FormControls";
import moment from "moment";

const FilteredViewHeader = props => {
  const handleChange = event => {
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
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          <FormControl
            label="Start"
            type="date"
            name="start-date"
            id="start-date"
            defaultValue={moment().format("YYYY-MM-DD")}
            required
          />
          <FormControl
            label="End"
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
};

export default FilteredViewHeader;
