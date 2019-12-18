import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import myPalette from "../CSS/mypalette";
import CssBaseline from "@material-ui/core/CssBaseline";
import Modal from "../Components/Modal/Modal";
import { auth } from "../fb/fb";
import Home from "../Components/Home/Home";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from "../Components/Footer/Footer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.app";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

// Global data & state
export const ModalContext = React.createContext(false);
export const UserContext = React.createContext(null);
const theme = createMuiTheme(myPalette);

const App = props => {
  const [showModal, setShowModal] = useState({ show: false });
  const [user, setUser] = useState(null);
  const { classes } = props;

  auth.onAuthStateChanged(user => {
    setUser(user);
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ModalContext.Provider value={{setShowModal}}>
        <UserContext.Provider value={user}>
          <CssBaseline />
          <Grid container justify="center" className={classes["lp-content"]}>
            {user ?
              <Home /> : 
              <Grid>
                <Grid component="header">
                  <Typography className={classes.header} variant="h1" color="primary" align="center">
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
            }
            {showModal.show && <Modal content={showModal} />}
          </Grid>
          <Footer />
        </UserContext.Provider>
      </ModalContext.Provider>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
