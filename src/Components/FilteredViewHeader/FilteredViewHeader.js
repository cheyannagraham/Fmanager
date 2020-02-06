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
    if (input === "start-date") {
      props.setFromDate(value);
    } else {
      props.setToDate(value);
    }
  };

  return (
    <Box width="100%" mt={2}>
      <form onChange={handleChange}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <label>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx={2}
              >
                <Typography variant="h5" component="span">
                  From:
                </Typography>
                <FormControl
                  type="date"
                  name="start-date"
                  id="start-date"
                  label=""
                  value={moment().format("YYYY-MM-DD")}
                  required
                />
              </Box>
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx={2}
              >
                <Typography variant="h5" component="span">
                  To:
                </Typography>
                <FormControl
                  type="date"
                  name="end-date"
                  id="end-date"
                  value={moment().format("YYYY-MM-DD")}
                  required
                />
              </Box>
            </label>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FilteredHeader;
