import React, { useState, useReducer, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

export const SnackbarContext = React.createContext();

let queue = [];
let showing = 0;
let maxSnack = 2;

const snackbarReducer = (state, options) => {
  switch (options.type) {
    case "add":
      // Generate random id string
      const id = `${Math.floor(Math.random() * 1000000)}`;
      // Create snackbar & add to queue
      queue.push(
        <MakeSnackbar
          content={options.content}
          actions={options.actions}
          id={id}
          key={id}
        />
      );

      if (showing < maxSnack) {
        snackbarReducer(state, { type: "show" });
      }
      return state;
    case "show":
      if (queue.length > 0 && showing < maxSnack) {
        if (queue[showing]) {
          state.push(queue[showing]);
          showing++;
        }
      }
      return state;
    case "delete":
      console.log(options.id);
      return state.filter(bar => bar.props.id !== options.id);

    default:
      console.log("invalid parameters for dispatch");
      return state;
  }
};

const SnackbarProvider = props => {
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
export default SnackbarProvider;

export const useSnackbar = options => {
  const snackbarDispatch = useContext(SnackbarContext);
  return snackbarDispatch;
};

const MakeSnackbar = props => {
  const [show, setShow] = useState(true);
  const snackbar = useSnackbar();

  return (
    <Slide
      direction="up"
      in={show}
      timeout={250}
      unmountOnExit={true}
      onExited={() => {
        snackbar({ type: "delete", id: props.id });
      }}
    >
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
