import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './CSS/main.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import myPalette from './CSS/mypalette'
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme(myPalette);



ReactDOM.render(
    <MuiThemeProvider theme = {theme}>
        <CssBaseline />
        <LandingPage />
    </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
