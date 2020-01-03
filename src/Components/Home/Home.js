import React, { useContext } from "react";
import Main from "../Main/Main";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "./home.style.js";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Face from "@material-ui/icons/Face";
import { UserContext } from "../../App/App";
import Signout from "../Signout/Signout";


const Home = props => {
  const { classes } = props;
  const user = useContext(UserContext);

  return (
    <Container>
      <AppBar position="relative">
        <Toolbar variant="dense" disableGutters>
          <Grid container alignItems="center">
            <Avatar className={classes.avatar}>
              <Face fontSize="large" color="secondary"/>
            </Avatar>
            <Typography variant="h6" color="secondary">{user.displayName}</Typography>
          </Grid>

          <Signout />

        </Toolbar>
      </AppBar>

      <Container maxWidth='md'>
        <Main />
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Home);
