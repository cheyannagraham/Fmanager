import React from "react";
import FilterListRounded from "@material-ui/icons/FilterListRounded";
import WithFab from "../WithFab/WithFab";
import withViewContext from "../withViewContext/withViewContext";

const FilterTransactionsButton = props => {
  const FabWithContext = withViewContext(WithFab, "filter");
  return (
    <FabWithContext
      aria-label="filter-transactions view"
      title="Filter Transactions"
    >
      <FilterListRounded />
    </FabWithContext>
  );
};

export default FilterTransactionsButton;
