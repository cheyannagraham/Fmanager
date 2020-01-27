import React from "react";
import CalendarTodayRounded from "@material-ui/icons/CalendarTodayRounded";
import WithFab from "../WithFab/WithFab";
import withViewContext from "../withViewContext/withViewContext";

const MonthlyViewButton = props => {
  const FabWithContext = withViewContext(WithFab, "monthly");

  return (
    <FabWithContext aria-label="monthly view" title="Monthly View">
      <CalendarTodayRounded />
    </FabWithContext>
  );
};

export default MonthlyViewButton;
