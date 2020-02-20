import React, { useState } from "react";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Signout from "../Signout/Signout";
import FilterTransactionsViewButton from "../FilterTransactionsViewButton/FilterTransactionsViewButton";
import MonthlyViewButton from "../MonthlyViewButton/MonthlyViewButton";
import DailyViewButton from "../DailyViewButton/DailyViewButton";

const SideDrawerMenuButton = props => {
  const [open, setOpen] = useState(false);
  const toggleMenu = e => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={toggleMenu}>
        <MenuRounded fontSize="large" />
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
    },
    {
      icon: <FilterTransactionsViewButton />,
      text: "Filter Transactions",
      divider: true
    },
    {
      icon: <Signout />,
      text: "Signout"
    }
  ].map(item => (
    <Box my={1} key={item.text}>
      <label>
        <ListItem button divider={item.divider}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </ListItem>
      </label>
    </Box>
  ));

  const content = (
    <>
      <Box>
        <List>{listItems}</List>
      </Box>
    </>
  );

  return (
    <>
      <Drawer
        onClick={props.closeMenu}
        anchor="left"
        variant="temporary"
        open={props.open}
      >
        {content}
      </Drawer>
    </>
  );
};
