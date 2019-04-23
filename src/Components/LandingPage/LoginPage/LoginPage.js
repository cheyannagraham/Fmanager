import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './loginpage.module.css';


const LoginPage = props => {

    return (
    <div>
        <Typography variant = "h1" color = "primary" align = "center">
            FManager
        </Typography>
        
        <div>
            <Button classes = {{ label:styles.button}} onClick={props.handleLogin} color = "primary" variant = "contained">Login</Button>
            <Button classes = {{ label:styles.button}} onClick={props.handleSignup} color = "secondary" variant = "contained">SignUp</Button>
        </div>
    </div>)


}


export default LoginPage;