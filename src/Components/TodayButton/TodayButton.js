import React from "react";
import TodayRounded from "@material-ui/icons/TodayRounded";
import WithFab from "../WithFab/WithFab";
import moment from "moment";

// Go to today
const TodayButton = props => {
  const handleClick = () => {
    props.setMonth(Number(moment().format("MM")));
    props.setYear(Number(moment().format("YYYY")));
  };

  return (

    <WithFab
      arialabel="goto-today"
      title="Go To Today"
      handleClick={handleClick}
    >
      <TodayRounded />
    </WithFab>
  );
};

export default TodayButton;
