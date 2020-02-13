import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import myPalette from "../CSS/mypalette";
import { auth } from "../fb/fb";
import styles from "./styles.app";
import Modal from "../Components/Modal/Modal";
import { getTransactions } from "../Components/Helpers/DBHelper";
import Main from "../Components/Main/Main";
import LandingPage from "../Components/LandingPage/LandingPage";
import { shiftQueue } from "../Components/QueueSnackbar/QueueSnackbar";
import { SnackbarProvider } from "notistack";

// Global data & state
export const ModalContext = React.createContext(false);
export const UserContext = React.createContext(null);
export const TransContext = React.createContext([]);
const SnackbarRef = React.createRef();
const theme = createMuiTheme(myPalette);

const App = props => {
  const [showModal, setShowModal] = useState({ show: false });
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const { classes } = props;

  auth.onAuthStateChanged(user => {
    setUser(user);
  });

  // update transactions if user changes
  useEffect(() => {
    user && (async () => setTransactions(await getTransactions()))();
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        TransitionProps={{direction:"up"}}
        dense
        autoHideDuration={2500}
        ref={SnackbarRef}
        action={sbar => (
          <Button onClick={() => SnackbarRef.current.closeSnackbar(sbar)}>
            Close
          </Button>
        )}
        onExited={shiftQueue}
      >
        <UserContext.Provider value={user}>
          <TransContext.Provider value={[transactions, setTransactions]}>
            <ModalContext.Provider value={{ setShowModal }}>
              <CssBaseline />
              <Grid
                container
                justify="center"
                className={classes["lp-content"]}
              >
                {user ? <Main /> : <LandingPage />}
                {showModal.show && <Modal content={showModal} />}
              </Grid>
            </ModalContext.Provider>
          </TransContext.Provider>
        </UserContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);
