import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddButton from "../AddButton/AddButton";
import TopBar from "../TopBar/TopBar";
import BarSpacer from "../BarSpacer/BarSpacer";
import WithView from "../WithView/WithView";
import FilteredView from "../FilteredView/FilteredView";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

export const ViewContext = React.createContext();

const Main = props => {
  const [view, setView] = useState("monthly");
  const func = useSnackbar();

  func({ type: "add", content: "content", actions: "actions" });
  func({ type: "add", content: "content1", actions: "actions1" });

  return (
    <ViewContext.Provider value={setView}>
      <Container>
        <TopBar />
        <Container>
          <BarSpacer />
          <Grid component="main" container>
            {view === "filter" ? <FilteredView /> : <WithView view={view} />}
          </Grid>
          <Box position="fixed" bottom="60px" right="15px" top="auto">
            <AddButton />
          </Box>
        </Container>
      </Container>
    </ViewContext.Provider>
  );
};

export default Main;
