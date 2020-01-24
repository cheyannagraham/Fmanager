import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import FilterListRounded from "@material-ui/icons/FilterListRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.filtertransactionsviewbutton";
import { ViewContext } from "../Main/Main";


const FilterTransactionsButton = props => {
  const viewDispatch = useContext(ViewContext);
  const { classes } = props;

  const handleClick = () => {
    viewDispatch("filter");
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="filter-transactions view"
      title="Filter Transactions"
      onClick={handleClick}
    >
      <FilterListRounded />
    </Fab>
  );
};

export default withStyles(styles)(FilterTransactionsButton);
