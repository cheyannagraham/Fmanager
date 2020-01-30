import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddButton from "../AddButton/AddButton";
import styles from "./styles.main";
import TopBar from "../TopBar/TopBar";
import WithBarSpacer from "../BarSpacer/BarSpacer";
import WithView from "../WithView/WithView";
import FilteredView from "../FilteredView/FilteredView";

export const ViewContext = React.createContext();

const Main = props => {
  const { classes } = props;
  const [view, setView] = useState("monthly");

  return (
    <ViewContext.Provider value={setView}>
      <Container>
        <TopBar />
        <Container maxWidth="md">
          <WithBarSpacer />
        </Container>
        <Grid component="main" container className={classes.main}>
          {view === "filter" ? <FilteredView /> : <WithView view={view} />}
        </Grid>
      </Container>
    </ViewContext.Provider>
  );
};

export default withStyles(styles)(Main);

// {/* <Grid container justify="flex-end">
//   <AddButton />
// </Grid> */}
