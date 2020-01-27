import React, { useContext } from "react";
import CalendarViewDayRounded from "@material-ui/icons/CalendarViewDayRounded";
import { ViewContext } from "../Main/Main";
import FabHOC from "../FabHOC/FabHOC";

const DailyViewButton = props => {
  const viewDispatch = useContext(ViewContext);

  const handleClick = () => {
    viewDispatch("daily");
  };

  return (
    <FabHOC
      arialabel="daily view"
      title="Daily View"
      handleClick={handleClick}
    >
      <CalendarViewDayRounded />
    </FabHOC>
  );
};

export default DailyViewButton;
