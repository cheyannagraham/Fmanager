import React from "react";
import TodayRounded from "@material-ui/icons/TodayRounded";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";

// Go to today
const TodayButton = props => {
  const handleClick = () => {
    props.setDate(moment().format("YYYY-MM-DD"));
  };

  return (
    <IconButton
      aria-label="goto-today"
      title="Go To Today"
      onClick={handleClick}
      color={props.color}
    >
      <TodayRounded />
    </IconButton>
  );
};

export default TodayButton;
