import React, { useState } from "react";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TopBarSpacer from "../TopBarSpacer/TopBarSpacer";
import Signout from "../Signout/Signout";
import FilterTransactionsButton from "../FilterTransactionsViewButton/FilterTransactionsViewButton";
import MonthlyViewButton from "../MonthlyViewButton/MonthlyViewButton";
import DailyViewButton from "../DailyViewButton/DailyViewButton";

const SideDrawerMenuButton = props => {
  const [open, setOpen] = useState(false);
  const toggleMenu = e => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <MenuRounded fontSize="large" color="secondary" />
      </IconButton>
      <SideDrawer open={open} toggleMenu={toggleMenu} closeMenu={closeMenu} />
    </>
  );
};

export default SideDrawerMenuButton;

export const SideDrawer = props => {
  const listItems = [
    {
      icon: <MonthlyViewButton />,
      text: "Monthly View"
    },
    {
      icon: <DailyViewButton />,
      text: "Daily View",
      divider: true
    },
    {
      icon: <FilterTransactionsButton />,
      text: "Filter Transactions"
    },
    {
      icon: <Signout />,
      text: "Signout"
    }
  ].map(item => (
    <label key={item.text}>
      <ListItem button divider={item.divider}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.text}</ListItemText>
      </ListItem>
    </label>
  ));

  const content = (
    <>
      <TopBarSpacer />
      <List>{listItems}</List>
    </>
  );

  return (
    <>
      {/* Mobile Display */}
      <Hidden mdUp={true}>
        <Drawer
          onClick={props.closeMenu}
          anchor="left"
          variant="temporary"
          open={props.open}
        >
          {content}
        </Drawer>
      </Hidden>

      {/* Not Mobile Display */}
      <Hidden smDown={true}>
        <Drawer
          onClick={props.closeMenu}
          anchor="left"
          variant="temporary"
          open={props.open}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};
