import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './loginpage.module.css';


const LoginPage = props => {

    return (
    <div id = {styles['login-page-container']}>
        <header>
            <Typography variant = "h1" color = 'primary' align = "center">
                FManager
            </Typography>
        </header>
        
        <main className = {styles.main}> 
            <div id = {styles['button-container']}>
                <Button size = 'large' onClick={props.handleLogin} color = "primary" variant = "contained">Login</Button>
                
                <Button size = 'large' onClick={props.handleSignup} color = "secondary" variant = "contained">SignUp</Button>
            </div>
        </main>
    </div>)


}


export default LoginPage;