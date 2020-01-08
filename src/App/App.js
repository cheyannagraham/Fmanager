import React, { useState, useEffect } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myPalette from "../CSS/mypalette";
import { auth } from "../fb/fb";
import styles from "./styles.app";
import Modal from "../Components/Modal/Modal";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import { getTransactions } from "../Components/Helpers/DBHelper";

// Global data & state
export const ModalContext = React.createContext(false);
export const UserContext = React.createContext(null);
export const TransContext = React.createContext([]);
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
    <MuiThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <TransContext.Provider value={[transactions, setTransactions]}>
          <ModalContext.Provider value={{ setShowModal }}>
            <CssBaseline />
            <Grid container justify="center" className={classes["lp-content"]}>
              {user ? (
                <Home />
              ) : (
                <Grid>
                  <Grid component="header">
                    <Typography
                      className={classes.header}
                      variant="h1"
                      color="primary"
                      align="center"
                    >
                      FManager
                    </Typography>
                  </Grid>

                  <Grid component="main" className={classes.main}>
                    <Grid className={classes["button-container"]}>
                      <Login />
                      <Signup />
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {showModal.show && <Modal content={showModal} />}
            </Grid>
            <Footer />
          </ModalContext.Provider>
        </TransContext.Provider>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
