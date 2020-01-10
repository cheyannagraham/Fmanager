import React, { useContext } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Face from "@material-ui/icons/Face";
import styles from "./home.style.js";
import { UserContext } from "../../App/App";
import Main from "../Main/Main";
import Signout from "../Signout/Signout";

const Home = props => {
  const { classes } = props;
  const user = useContext(UserContext);

  return (
    <Container>
      <AppBar position="relative">
        <Toolbar variant="dense" disableGutters>
          <Box width="70%">
            <Grid wrap="nowrap" container alignItems="center">
              <Box m="0.6rem">
                <Avatar className={classes.avatar}>
                  <Face fontSize="large" color="secondary" />
                </Avatar>
              </Box>
              <Typography noWrap variant="h6" color="secondary">
                {user.displayName}
              </Typography>
            </Grid>
          </Box>
          <Box width="30%" align="right">
            <Signout />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Main />
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Home);
