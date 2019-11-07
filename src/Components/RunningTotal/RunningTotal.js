import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./style.runningtotal";
import { withStyles } from "@material-ui/core/styles";

const RunningTotal = props => {
  const { classes } = props;

  useEffect(() => {
    if (props.runningTotal < 0)
      document.querySelector("#run-total").classList.add(classes.neg);
    else document.querySelector("#run-total").classList.remove(classes.neg);

    if (props.monthlyTotal < 0)
      document.querySelector("#monthly-total").classList.add(classes.neg);
    else document.querySelector("#monthly-total").classList.remove(classes.neg);
  });

  return (
    <Paper className={classes.container}>
      <Grid className={classes["trans-date"]} fill="secondary">
        <Typography color="primary" className={classes["total-head"]}>
          Total
        </Typography>
      </Grid>

      <Grid container spacing={1} className={classes.total}>
        
        <Grid item xs={9}>
          <Typography align="left" color="secondary">
            Monthly Total
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography id="monthly-total" className={classes["total-value"]}>
            ${props.monthlyTotal.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
      
      <Divider />

      <Grid container spacing={1} className={classes.total}>
        
        <Grid item xs={9}>
          <Typography align="left" color="secondary">
            Running Total
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography id="run-total"  className={classes["total-value"]}>
            ${props.runningTotal.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(RunningTotal);
