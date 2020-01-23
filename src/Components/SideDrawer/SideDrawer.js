import React from "react";
import Drawer from "@material-ui/core/Drawer";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import { Hidden } from "@material-ui/core";

const SideDrawer = props => {
  return (
    <>
    {/* Mobile Display */}
      <Hidden mdUp={true}>
        <Drawer variant="permanent" open={true}>
          <TopBarSpacer />
          <p>small</p>
        </Drawer>
      </Hidden>

      {/* Not Mobile Display */}
      <Hidden smDown={true}>
        <Drawer variant="permanent" open={true}>
          <TopBarSpacer />
          <p>large</p>
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideDrawer;
