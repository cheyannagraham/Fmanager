import React from "react";
import CalendarViewDayRounded from "@material-ui/icons/CalendarViewDayRounded";
import WithFab from "../WithFab/WithFab";
import withViewContext from "../withViewContext/withViewContext";

const DailyViewButton = props => {
  const FabWithContext = withViewContext(WithFab, "daily");

  return (
    <FabWithContext arialabel="daily view" title="Daily View">
      <CalendarViewDayRounded />
    </FabWithContext>
  );
};

export default DailyViewButton;
