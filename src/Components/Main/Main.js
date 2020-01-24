import React, { useReducer } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddButton from "../AddButton/AddButton";
import styles from "./styles.main";
import TopBar from "../TopBar/TopBar";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import MonthlyView from "../MonthlyView/MonthlyView";
import DailyView from "../DailyView/DailyView";
import FilteredView from "../FilteredView/FilteredView";

export const ViewContext = React.createContext();

const reducer = (state, view) => {
  switch (view) {
    case "daily":
      return <DailyView />;
    case "filter":
      return <FilteredView />;
    default:
      return <MonthlyView />;
  }
};

const Main = props => {
  const { classes } = props;
  const [view, dispatch] = useReducer(reducer, <MonthlyView />);

  return (
    <ViewContext.Provider value={dispatch}>
      <Container>
        <TopBar />
        <Container maxWidth="md">
          <TopBarSpacer />
        </Container>
        <Grid component="main" container className={classes.main}>
          {view}
          <Grid container justify="flex-end">
            <AddButton />
          </Grid>
        </Grid>
      </Container>
    </ViewContext.Provider>
  );
};

export default withStyles(styles)(Main);

// Header will have GO TO Date Functionality */}
// {/* <GoToDateButton setMonth={setMonth} setYear={setYear} />
