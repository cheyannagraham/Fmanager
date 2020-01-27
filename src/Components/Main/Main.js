import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AddButton from "../AddButton/AddButton";
import styles from "./styles.main";
import TopBar from "../TopBar/TopBar";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import WithView from "../WithView/WithView";

export const ViewContext = React.createContext();

const Main = props => {
  const { classes } = props;
  const [view, setView] = useState("monthly");

  return (
    <ViewContext.Provider value={setView}>
      <Container>
        <TopBar />
        <Container maxWidth="md">
          <TopBarSpacer />
        </Container>
        <Grid component="main" container className={classes.main}>
          <WithView view={view} />
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
