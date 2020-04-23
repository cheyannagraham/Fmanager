import React, { useState, useReducer, useContext } from "react";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

export const SnackbarContext = React.createContext();

const snackbarReducer = (state = [], options) => {
  switch (options.type) {
    case "delete":
      return state.filter((bar) => bar.props.id !== options.id);

    default:
      // Return if options is empty
      if (Object.keys(options).length < 1) return state;

      // Generate random id string
      const id = `${Math.floor(Math.random() * 1000000)}`;

      state.push(
        <MakeSnackbar
          text={options.text}
          actions={options.actions}
          variant={options.variant}
          id={id}
          key={id}
        />
      );
      return [...state];
  }
};

const SnackbarProvider = (props) => {
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

export const useSnackbar = (options) => {
  return useContext(SnackbarContext);
};

const MakeSnackbar = (props) => {
  const [show, setShow] = useState(true);
  const dispatch = useSnackbar();
  const opacity = 0.9;

  const variants = {
    success: {
      bgcolor: `rgba(42, 163, 50, ${opacity})`,
      text: "black",
    },
    warning: {
      bgcolor: `rgba(255, 179, 0, ${opacity})`,
      text: "black",
    },
    error: {
      bgcolor: `rgba(201, 18, 33, ${opacity})`,
      text: "white",
    },
    
    text: "black",
  };

  return (
    <Slide
      direction={show ? "up" : "right"}
      in={show}
      timeout={250}
      onExited={() => {
        dispatch({ type: "delete", id: props.id });
      }}
      onEntered={() => setTimeout(() => setShow(false), 4000)}
    >
      <Box
        bgcolor={variants[props.variant].bgcolor}
        color={variants[props.variant].text}
        p={1}
        zIndex={1400}
        width="100%"
        maxWidth="400px"
        display="flex"
        justifyContent="space-between"
        {...props}
      >
        <Box display="flex" alignItems="center">
          {props.text.toUpperCase()}
        </Box>
        <Box color={variants[props.variant].text}>
          {props.actions}
          <Button color="inherit" onClick={() => setShow(false)}>
            Close
          </Button>
        </Box>
      </Box>
    </Slide>
  );
};
