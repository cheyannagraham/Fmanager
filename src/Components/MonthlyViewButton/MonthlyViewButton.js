import React, { useContext } from "react";
import CalendarTodayRounded from "@material-ui/icons/CalendarTodayRounded";
import { ViewContext } from "../Main/Main";
import FabHOC from "../FabHOC/FabHOC";

const MonthlyViewButton = props => {
  const viewDispatch = useContext(ViewContext);

  const handleClick = () => {
    viewDispatch("monthly");
  };

  return (
    <FabHOC
      aria-label="monthly view"
      title="Monthly View"
      handleClick={handleClick}
    >
      <CalendarTodayRounded />
    </FabHOC>
  );
};

export default MonthlyViewButton;
