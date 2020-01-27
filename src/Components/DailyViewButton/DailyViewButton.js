import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import CalendarViewDayRounded from "@material-ui/icons/CalendarViewDayRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.dailyviewbutton";
import { ViewContext } from "../Main/Main";


const  DailyViewButton= props => {
  const viewDispatch = useContext(ViewContext);
  const { classes } = props;

  const handleClick = () => {
    viewDispatch("daily");
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="daily view"
      title="Daily View"
      onClick={handleClick}
    >
      <CalendarViewDayRounded />
    </Fab>
  );
};

export default withStyles(styles)(DailyViewButton);
