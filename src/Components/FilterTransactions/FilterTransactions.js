import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FilterListRounded from "@material-ui/icons/FilterListRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.filtertransactions";
import { TransContext } from "../../App/App";
import { ModalContext } from "../../App/App";
import TransactionList from "../TransactionList/TransactionList";
import { FormControl } from "../FormControls/FormControls";
import { CloseModalButton } from "../Modal/Modal";
import moment from "moment";

// Go to today
const FilterTransactionsButton = props => {
  const { classes } = props;
  const [transactions] = useContext(TransContext);
  const showModal = useContext(ModalContext).setShowModal;

  const FilterForm = () => {
    return (
      <form id="filter-form">
        <Box display="grid">
          <FormControl
            type="date"
            name="filter-from-date"
            id="filter-from-date"
            label="From:"
            value={moment().format("YYYY-MM-DD")}
            required
          />

          <FormControl
            type="date"
            name="filter-to-date"
            id="filter-to-date"
            label="To:"
            value={moment().format("YYYY-MM-DD")}
            required
          />

          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleFilter}
            >
              Filter
            </Button>
            <CloseModalButton color="secondary" />
          </Box>
        </Box>
      </form>
    );
  };

  const showFilterForm = () => {
    showModal({
      show: true,
      title: "Filter Transactions",
      content: <FilterForm />
    });
  };

  const handleFilter = e => {
    e.preventDefault();
    const fromDate = document.querySelector("#filter-from-date").value;
    const toDate = document.querySelector("#filter-to-date").value;
    const filteredTransactions = transactions.filter(
      trans => trans.date >= fromDate && trans.date <= toDate
    );
    showModal({
      show: true,
      title: "Transactions",
      text: (
        <>
          <Typography component="span" display="block">From {moment(fromDate).format("MMM-DD-YYYY")} </Typography>
          <Typography component="span" display="block">To {moment(toDate).format("MMM-DD-YYYY")} </Typography>
        </>
      ),
      actions: <CloseModalButton color="primary" />,
      content:
        filteredTransactions.length > 0 ? (
          <TransactionList transactions={filteredTransactions} />
        ) : (
          <Box fontSize="1.2rem">No Transactions</Box>
        )
    });
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="filter transactions"
      title="Filter Transactions"
      onClick={showFilterForm}
    >
      <FilterListRounded />
    </Fab>
  );
};

export default withStyles(styles)(FilterTransactionsButton);
