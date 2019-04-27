import React from 'react';
import Main from '../Main/Main';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './home.style.js';
import Grid from '@material-ui/core/Grid';



const Home = props => {

	const { classes } = props;

	return (
		<Grid container className = {classes.home}>

				<AppBar>
					<Toolbar>
							<Grid className = {classes['user-info']}>
									<i className = {`material-icons ${classes.icon}`}>
										face
									</i>

									<Typography variant='h4'>
										HI {props.displayName}!
									</Typography>

							</Grid>

							<Button onClick={props.signout}>Signout</Button>
					</Toolbar>

				</AppBar>

				<Main />

		</Grid>

	)
}

export default withStyles(styles)(Home);