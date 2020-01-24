import React, { useState } from "react";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import Signout from "../Signout/Signout";

const SideDrawerMenuButton = props => {
  const [open, setOpen] = useState(false);
  const toggleMenu = e => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <MenuRounded fontSize="large" color="secondary" />
      </IconButton>
      <SideDrawer open={open} />
    </>
  );
};

export default SideDrawerMenuButton;

export const SideDrawer = props => {
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
        <Drawer anchor="left" variant="temporary" open={props.open}>
          {content}
        </Drawer>
      </Hidden>

      {/* Not Mobile Display */}
      <Hidden smDown={true}>
        <Drawer anchor="left" variant="temporary" open={props.open}>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};
