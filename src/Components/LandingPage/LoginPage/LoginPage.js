import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './style.loginpage';
import { withStyles } from '@material-ui/core/styles';


const LoginPage = props => {

    return (
        <div className = {props.classes['login-page-container']}>
            <header className={props.classes['header-section']}>
                
                <Typography className={props.classes.header} variant="h1" color='primary' align="center">
                    FManager
                </Typography>

            </header>

            <main className = {props.classes.main}>
                
                <div className = {props.classes['button-container']}>
                    
                    <Button className = {props.classes['login-button']} size='large' onClick={props.handleLogin} color="secondary" variant="contained">Login</Button>
                    <Button size='large' onClick={props.handleSignup} color="primary" variant="contained">SignUp</Button>

                </div>

            </main>
        </div>)


}


export default withStyles(styles)(LoginPage);