import React, { useState } from "react";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import Signout from "../Signout/Signout";
import FilterTransactionsButton from "../FilterTransactionsViewButton/FilterTransactionsViewButton";
import GoToDateButton from "../GoToDateButton/GoToDateButton";
import MonthlyViewButton from "../MonthlyViewButton/MonthlyViewButton";
import DailyViewButton from "../DailyViewButton/DailyViewButton";

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
      <SideDrawer open={open} toggleMenu={toggleMenu} />
    </>
  );
};

export default SideDrawerMenuButton;

export const SideDrawer = props => {
  const content = (
    <>
      <TopBarSpacer />
      <List>
        <ListItem>Views</ListItem>
        <ListItem>
          <MonthlyViewButton />
        </ListItem>
        <ListItem>
          <DailyViewButton />
        </ListItem>
        <ListItem>Options</ListItem>
        <ListItem>
          <GoToDateButton />
        </ListItem>
        <ListItem>
          <FilterTransactionsButton />
        </ListItem>
        <ListItem>
          <Signout />
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Display */}
      <Hidden mdUp={true}>
        <Drawer onClick={props.toggleMenu} anchor="left" variant="temporary" open={props.open}>
          {content}
        </Drawer>
      </Hidden>

      {/* Not Mobile Display */}
      <Hidden smDown={true}>
        <Drawer onClick={props.toggleMenu} anchor="left" variant="temporary" open={props.open}>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};
