import React, { useContext } from "react";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button"
import FilterListRounded from "@material-ui/icons/FilterListRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.filtertransactions";
import { TransContext } from "../../App/App";
import { ModalContext } from "../../App/App";
import TransactionList from "../TransactionList/TransactionList";
import { DateControl } from "../FormControls/FormControls";
import { CloseModalButton } from "../Modal/Modal";

// Go to today
const AllTransactionsButton = props => {
  const { classes } = props;
  const [transactions] = useContext(TransContext);
  const showModal = useContext(ModalContext).setShowModal;

  const FilterForm = () => {
    return (
      <form id="filter-form">
        <Box>
        From:
        <DateControl id="filter-from"/>

        To:
        <DateControl id="filter-to"/>

        <Button variant="contained" color="primary" type="submit">Go</Button>
        <CloseModalButton color="secondary" />
        </Box>
      </form>
    );
  };

  const handleClick = () => {
    showModal({
      show: true,
      title: "All Transactions",
      // actions: <CloseModalButton color="primary" />,
      content: <FilterForm />
    });
    // showModal({
    //   show: true,
    //   title: "All Transactions",
    //   actions: <CloseModalButton color="primary" />,
    //   content:
    //     transactions.length > 0 ? (
    //       <TransactionList transactions={transactions} />
    //     ) : (
    //       <Box fontSize="1.2rem">No Transactions</Box>
    //     )
    // });
  };

  return (
    <Fab
      className={classes["fab-container"]}
      size="small"
      color="primary"
      aria-label="filter transactions"
      title="Filter Transactions"
      onClick={handleClick}
    >
      <FilterListRounded />
    </Fab>
  );
};

export default withStyles(styles)(AllTransactionsButton);
