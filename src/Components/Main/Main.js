import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AddButton from "../AddButton/AddButton";
import TopBar from "../TopBar/TopBar";
import BarSpacer from "../BarSpacer/BarSpacer";
import WithView from "../WithView/WithView";
import FilteredView from "../FilteredView/FilteredView";

export const ViewContext = React.createContext();

const Main = (props) => {
  const [view, setView] = useState("monthly");

  return (
    <ViewContext.Provider value={setView}>
      <Container>
        <TopBar />
        <Container>
          <BarSpacer />
          <Grid component="main" container>
            {view === "filter" ? <FilteredView /> : <WithView view={view} />}
          </Grid>
          <Box position="fixed" bottom="85px" right="15px" top="auto">
            <AddButton />
          </Box>
        </Container>
      </Container>
    </ViewContext.Provider>
  );
};

export default Main;
