import React, { useState, useReducer, useContext } from "react";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

export const SnackbarContext = React.createContext();

const snackbarReducer = (state = [], options) => {
  switch (options.type) {
    case "delete":
      return state.filter(bar => bar.props.id !== options.id);

    default:
      // Generate random id string
      if(!options) return state;

      const id = `${Math.floor(Math.random() * 1000000)}`;
      state.push(
        <MakeSnackbar
          content={options.content}
          actions={options.actions}
          variant={options.variant}
          id={id}
          key={id}
        />
      );
      return [...state];
  }
};

const SnackbarProvider = props => {
  const [snackbars, snackbarDispatch] = useReducer(snackbarReducer, []);
  return (
    <SnackbarContext.Provider value={snackbarDispatch}>
      {props.children}

      <Box zIndex={1400} width="100%" position="fixed" bottom={0} left={0}>
        {snackbars.slice(0, 1)}
      </Box>
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

  const variants = {
    success: "#7cb342",
    warning: "#ffb300",
    error: "#ff7961",
    text: "black",
    action: "#4a148c"
  };

  return (
    <Slide
      direction="up"
      in={show}
      timeout={250}
      onExited={() => {
        dispatch({ type: "delete", id: props.id });
      }}
      onEntered={() => setTimeout(() => setShow(false), 4000)}
    >
      <Box
        bgcolor={variants[props.variant]}
        color={variants.text}
        mt={1}
        p={2}
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
        <Box color={variants.action}>
          {props.actions}
          {/* <Button color={variants.text} onClick={() => setShow(false)}>Close</Button> */}
        </Box>
      </Box>
    </Slide>
  );
};
