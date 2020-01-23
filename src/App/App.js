import React, { useState, useEffect } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import myPalette from "../CSS/mypalette";
import { auth } from "../fb/fb";
import styles from "./styles.app";
import Container from "@material-ui/core/Container";
import Main from "../Components/Main/Main";
import TopBar from "../Components/TopBar/TopBar";
import Modal from "../Components/Modal/Modal";
import Footer from "../Components/Footer/Footer";
import { getTransactions } from "../Components/Helpers/DBHelper";
import LandingPage from "../Components/LandingPage/LandingPage";
import TopBarSpacer from "../Components/TopBarSpacer/TopBarSpacer";

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
                <Container>
                  <TopBar />
                  <Container maxWidth="md">
                    <TopBarSpacer />
                    <Main />
                  </Container>
                </Container>
              ) : (
                <LandingPage />
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
