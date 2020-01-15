import React, { useState, useEffect, useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TodayButton from "../TodayButton/TodayButton";
import AddButton from "../AddButton/AddButton";
import GoToDateButton from "../GoToDateButton/GoToDateButton";
import styles from "./styles.main";
import FilterTransactions from "../FilterTransactions/FilterTransactions";
import MonthlyView from "../MonthlyView/MonthlyView";
import FilteredView from "../FilteredView/FilteredView";
import DailyView from "../DailyView/DailyView";

const Main = props => {
  const { classes } = props;

  return (
    <Grid component="main" container className={classes.main}>
      <MonthlyView />
      <FilteredView />
      <DailyView />

      {/* Need to adjust according to view */}
      {/* <Grid container justify="flex-end">
        <FilterTransactions />
        <TodayButton setMonth={setMonth} setYear={setYear} />
        <GoToDateButton setMonth={setMonth} setYear={setYear} />
        <AddButton />
      </Grid> */}
    </Grid>
  );
};

export default withStyles(styles)(Main);
