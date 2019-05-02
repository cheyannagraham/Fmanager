import React from "react";
import style from "../../CSS/footer.module.css";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.footer";
import Typography from "@material-ui/core/Typography";

const Footer = props => {
  const { classes } = props;

  return (
    <Grid
      container
      justify="center"
      id={style.footer}
      color="primary"
      className={classes.footer}
    >
      <Typography variant="body1" className={classes.p}>
        Website By Cheyanna Graham
      </Typography>

      <Typography variant="body1" className={classes.p}>
        Icons By Material Designs
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
