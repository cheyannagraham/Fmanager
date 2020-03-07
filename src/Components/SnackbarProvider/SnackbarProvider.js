import React, { useState, useReducer, useContext } from "react";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import SnackbarContainer from "./SnackbarContainer";

export const SnackbarContext = React.createContext();

const snackbarReducer = (state = [], options) => {
  switch (options.type) {
    case "add":
      // Generate random id string
      const id = `${Math.floor(Math.random() * 1000000)}`;
      state.push(
        <MakeSnackbar
          content={options.content}
          actions={options.actions}
          id={id}
          key={id}
        />
      );
      return [...state];

    case "delete":
      return state.filter(bar => bar.props.id !== options.id);

    default:
      console.log("invalid parameters for dispatch");
      return state;
  }
};

const SnackbarProvider = props => {
  const [snackbars, snackbarDispatch] = useReducer(snackbarReducer, []);
  return (
    <SnackbarContext.Provider value={snackbarDispatch}>
      {props.children}
      <SnackbarContainer snackbars={snackbars.slice(0, 2)} />
    </SnackbarContext.Provider>
  );
};
export default SnackbarProvider;

export const useSnackbar = options => {
  return useContext(SnackbarContext);
};

const MakeSnackbar = props => {
  const [show, setShow] = useState(true);
  const dispatch = useSnackbar();

  return (
    <Slide
      direction="up"
      in={show}
      timeout={250}
      onExited={() => {
        dispatch({ type: "delete", id: props.id });
      }}
      onEntered={() => setTimeout(() => setShow(false), 3000)}
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
        <Box display="flex" alignContent="center">
          {props.content}
        </Box>
        <Box>
          {props.actions}
          <Button onClick={() => setShow(false)}>Close</Button>
        </Box>
      </Box>
    </Slide>
  );
};
