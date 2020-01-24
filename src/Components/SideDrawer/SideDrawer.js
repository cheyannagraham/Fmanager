import React from "react";
import Drawer from "@material-ui/core/Drawer";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import Hidden from "@material-ui/core/Hidden";
import Signout from "../Signout/Signout";

const SideDrawer = props => {
  const content = (
    <>
      <TopBarSpacer />
      <Signout />
    </>
  );
  
  return (
    <>
      {/* Mobile Display */}
      <Hidden mdUp={true}>
        <Drawer anchor="left" variant="temporary" open={props.show}>
          {content}
        </Drawer>
      </Hidden>

      {/* Not Mobile Display */}
      <Hidden smDown={true}>
        <Drawer anchor="left" variant="temporary" open={props.show}>
        {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideDrawer;
