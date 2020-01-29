import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormControl } from "../FormControls/FormControls";
import moment from "moment";

const FilteredHeader = props => {
  const handleChange = e => {
    const input = e.target.id;
    const value = e.target.value;
    if (input === "filter-from-date") {
      props.setFromDate(value);
    } else {
      props.setToDate(value);
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <form onChange={handleChange}>
        <Box display="flex" flexWrap="wrap" alignItems="center" py={2.5}>
          <Box display="flex" flexWrap="wrap" alignItems="center" m={1}>
            <Typography variant="h5" component="span">
              From:
            </Typography>
            <Box mx={1}>
              <FormControl
                type="date"
                name="filter-from-date"
                id="filter-from-date"
                label=""
                value={moment().format("YYYY-MM-DD")}
                required
              />
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" alignItems="center" m={1}>
            <Typography variant="h5" component="span">
              To:
            </Typography>
            <Box mx={1}>
              <FormControl
                type="date"
                name="filter-to-date"
                id="filter-to-date"
                value={moment().format("YYYY-MM-DD")}
                required
              />
            </Box>
          </Box>
        </Box>
      </form>
    </Grid>
  );
};

export default FilteredHeader;
