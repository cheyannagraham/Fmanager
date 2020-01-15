import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowRight from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles.monthlyviewheader";
import moment from "moment";

const MonthlyViewHeader = props => {
  const { classes } = props;

  // Increment & Decrement Months
  const handleClick = eventVal => {
    props.setDate(
      eventVal === 1
        ? moment(props.date)
            .add(1, "months")
            .format("MMMM YYYY")
        : moment(props.date)
            .subtract(1, "months")
            .format("MMMM YYYY")
    );
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes["month-header"]}
    >
      <IconButton
        color="primary"
        className={classes.ibutton}
        onClick={() => {
          handleClick(-1);
        }}
      >
        <ArrowLeft className={classes.icon} />
      </IconButton>

      <Typography
        variant="h4"
        color="primary"
        className={classes["month-title"]}
      >
        {moment(props.date).format('MMMM YYYY')}
      </Typography>

      <IconButton
        color="primary"
        className={classes.ibutton}
        onClick={() => {
          handleClick(1);
        }}
      >
        <ArrowRight className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default withStyles(styles)(MonthlyViewHeader);
