import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './loginpage.module.css';


const LoginPage = props => {

    return (
    <div>
        <h1>LandingPage</h1>
        <div>
            <Button className = {styles.button} onClick={props.handleLogin} color = "primary" variant = "contained">Login</Button>
            <Button onClick={props.handleSignup} color = "secondary" variant = "outlined">SignUp</Button>
        </div>
    </div>)


}


export default LoginPage;