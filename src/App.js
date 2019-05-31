import React, {useState} from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import myPalette from './CSS/mypalette'
import CssBaseline from '@material-ui/core/CssBaseline';
import Modal from './Components/Modal/Modal'
import './CSS/html.css';



export const ModalContext = React.createContext(false);
const theme = createMuiTheme(myPalette);


const App = props => {
    const [showModal, setShowModal] = useState({ show: false });

    return(
        <MuiThemeProvider theme={theme}>
            <ModalContext.Provider value={{ setShowModal }}>
                <CssBaseline />
                <LandingPage />
                {showModal.show && <Modal content={showModal} />}
            </ModalContext.Provider>
        </MuiThemeProvider>)
}

export default App;
