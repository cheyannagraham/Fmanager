import React from "react";
import Fab from "@material-ui/core/Fab";
import CalendarToday from "@material-ui/icons/CalendarToday";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.todaybutton";
import moment from "moment";

// Go to today
const TodayButton = props => {
  const { classes } = props;
  const handleClick = () => {
    props.setMonth(Number(moment().format("MM")));
    props.setYear(Number(moment().format("YYYY")));
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="goto-today"
      title="Go To Today"
      onClick={handleClick}
    >
      <CalendarToday />
    </Fab>
  );
};

export default withStyles(styles)(TodayButton);
