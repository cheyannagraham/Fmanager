import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddButton from "../AddButton/AddButton";
import styles from "./styles.main";
import TopBar from "../TopBar/TopBar";
import BarSpacer from "../BarSpacer/BarSpacer";
import WithView from "../WithView/WithView";
import FilteredView from "../FilteredView/FilteredView";

import Box from "@material-ui/core/Box";

export const ViewContext = React.createContext();

const Main = props => {
  const { classes } = props;
  const [view, setView] = useState("monthly");

  return (
    <ViewContext.Provider value={setView}>
      <Container>
        <TopBar />
        <Container maxWidth="md">
          <BarSpacer />
        </Container>
        <Grid component="main" container className={classes.main}>
          {view === "filter" ? <FilteredView /> : <WithView view={view} />}
        </Grid>
          <Box position="fixed" bottom="60px" right="15px" top="auto">
            <AddButton />
          </Box>
      </Container>
    </ViewContext.Provider>
  );
};

export default withStyles(styles)(Main);
