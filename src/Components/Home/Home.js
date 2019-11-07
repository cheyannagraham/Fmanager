import React from "react";
import Main from "../Main/Main";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./home.style.js";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Face from "@material-ui/icons/Face";

const Home = props => {
  const { classes } = props;

  return (
    <Grid container >
      <AppBar position="static">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            
            <Avatar className={classes.avatar}>
              <Face fontSize="large" className={classes.dark}/>
            </Avatar>

            <Typography variant="h6" className={classes.dark}>{props.displayName}</Typography>
          </Grid>

          <Button onClick={props.signout} className={classes.dark}>Signout</Button>
        </Toolbar>
      </AppBar>

      <Main />
    </Grid>
  );
};

export default withStyles(styles)(Home);
