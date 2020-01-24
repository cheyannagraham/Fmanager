import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import FilterListRounded from "@material-ui/icons/FilterListRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.filtertransactionsviewbutton";


const FilterTransactionsButton = props => {
  const { classes } = props;

  const handleClick = () => {
    console.log("click");

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
