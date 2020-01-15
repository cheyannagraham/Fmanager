import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowRight from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles.monthlyviewheader";
import moment from "moment";

const MonthHeader = props => {
  const { classes } = props;

  // Ensure months go from Dec > Jan & Jan < Dec
  const handleClick = eventVal => {
    const monthVal = Number(props.month) + eventVal;
    let newMonth = monthVal;
    let newYear = props.year;

    if (monthVal === 0) {
      newYear = Number(props.year) - 1;
      newMonth = 12;
    } else if (monthVal === 13) {
      newYear = Number(props.year) + 1;
      newMonth = 1;
    }
    if (props.year !== newYear) props.setYear(newYear);

    props.setMonth(newMonth);
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
        {`${moment(props.month, "MM").format("MMMM")} ${props.year}`}
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

export default withStyles(styles)(MonthHeader);
