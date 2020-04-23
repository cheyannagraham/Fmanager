import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { auth } from "../fb/fb";
import Modal from "../Components/Modal/Modal";
import { getTransactions } from "../Components/Helpers/DBHelper";
import Main from "../Components/Main/Main";
import LandingPage from "../Components/LandingPage/LandingPage";
import Catch from "../Components/Catch/Catch";
import SnackbarProvider from "../Components/SnackbarProvider/SnackbarProvider";
import Palette from "../CSS/Palette.js";

// Global data & state
export const ModalContext = React.createContext(false);
export const UserContext = React.createContext(null);
export const TransContext = React.createContext([]);

const App = props => {
  const [modalContent, setModalContent] = useState({ show: false });
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  auth.onAuthStateChanged(user => {
    setUser(user);
  });

  // update transactions if user changes
  useEffect(() => {
    user &&
      getTransactions()
        .then(results => setTransactions(results))
        .catch(error => {
          setModalContent(
            Catch({ error: error, title: "Error Fetching Transactions" })
          );
        });
  }, [user]);

  return (
    <ThemeProvider theme={Palette}>
      <SnackbarProvider>
        <UserContext.Provider value={user}>
          <TransContext.Provider value={[transactions, setTransactions]}>
            <ModalContext.Provider value={setModalContent}>
              <CssBaseline />
              <Grid container justify="center">
                {user ? <Main /> : <LandingPage />}
                {modalContent.show && <Modal content={modalContent} />}
              </Grid>
            </ModalContext.Provider>
          </TransContext.Provider>
        </UserContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
