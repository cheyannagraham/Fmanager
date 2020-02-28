import React, { useState, useReducer, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

export const SnackbarContext = React.createContext();

const SnackbarProvider = props => {
  let queue = [];
  let showing = 0;
  let maxSnack = 2;

  const snackbarReducer = (state, options) => {
    switch (options.type) {
      case "add":
        // Create snackbar & add to queue
        queue.push(
          <MakeSnackbar content={options.content} actions={options.actions} />
        );
        if (showing < maxSnack) {
          snackbarReducer(state, { type: "show" });
        }
        return state;
      case "show":
        // console.log("show");
        if (queue.length > 0 && showing < maxSnack) {
          if (queue[showing]) {
            state.push(queue[showing]);
            showing++;
          }
        }
        return state;
      case "close":
        return;
      default:
        return state;
    }
  };

  const [totalSnackbars, snackbarDispatch] = useReducer(snackbarReducer, []);

  return (
    <SnackbarContext.Provider value={snackbarDispatch}>
      {props.children}
      <Box
        zIndex={1400}
        id="here"
        width="100%"
        position="fixed"
        bottom={0}
        left={0}
      >
        {totalSnackbars}
      </Box>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = options => {
  const snackbarDispatch = useContext(SnackbarContext);
  return snackbarDispatch;
};

const MakeSnackbar = props => {
  const [show, setShow] = useState(true);

  return (
    <Slide direction="up" in={show} timeout={250}>
      <Box
        bgcolor="secondary.light"
        mt={1}
        p={1}
        fontSize={16}
        zIndex={1400}
        width="100%"
        maxWidth="350px"
        display="flex"
        justifyContent="space-between"
        {...props}
      >
        <Box>{props.content}</Box>
        <Box>
          {props.actions}
          <Button onClick={() => setShow(false)}>Close</Button>
        </Box>
      </Box>
    </Slide>
  );
};

export default SnackbarProvider;
