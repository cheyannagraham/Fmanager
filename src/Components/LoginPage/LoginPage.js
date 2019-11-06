import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './style.loginpage';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


const LoginPage = props => {
    const {classes} = props;

    return (
        <Grid className = {classes['login-page-container']}>
            <Grid component = 'header' className={classes['header-section']}>
                
                <Typography className={classes.header} variant="h1" color='primary' align="center">
                    FMananger
                </Typography>

            </Grid>

            <Grid component = 'main' className = {classes.main}>
                
                <Grid className = {classes['button-container']}>
                    
                    <Button className = {classes['login-button']} size='large' onClick={props.handleLogin} color="secondary" variant="contained">Login</Button>
                    
                    <Button size='large' onClick={props.handleSignup} color="primary" variant="contained">SignUp</Button>

                </Grid>

            </Grid>
        </Grid>)


}


export default withStyles(styles)(LoginPage);