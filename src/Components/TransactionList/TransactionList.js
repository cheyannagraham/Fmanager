import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import UpdateTransaction from "../UpdateTransactionButton/UpdateTransactionButton";
import DeleteTransaction from "../DeleteTransactionButton/DeleteTransactionButton";
import TransactionInfo from "../TransactionInfo/TransactionInfo";
import moment from "moment";
import BarSpacer from "../BarSpacer/BarSpacer";

const TransactionList = props => {
  // Group Transactions by Date
  const groupTransactions = () => {
    return [...new Set(props.transactions.map(trans => trans.date))].map(
      date => ({
        items: props.transactions.filter(trans => trans.date === date),
        date: date
      })
    );
  };

  // Sort Groups By Date
  const sortGroupedTransactions = () => {
    return groupTransactions().sort((prev, next) => {
      return moment(next.date) - moment(prev.date);
    });
  };

  return (
    <Box maxHeight="75vh" maxWidth="80vw">
      {sortGroupedTransactions().map(group => (
        <Box my={2} key={group.date}>
          <Box borderBottom="2px solid black">
            <Typography key={group.date}>
              {props.fullDate
                ? moment(group.date).format("YYYY MMM DD")
                : moment(group.date).format("MMM DD")}
            </Typography>
          </Box>
          {group.items.map(transaction => (
            <Grid
              key={transaction.id}
              container
              spacing={1}
              alignItems="center"
            >
              <UpdateTransaction transaction={transaction} />
              <TransactionInfo transaction={transaction} />
              <DeleteTransaction transaction={transaction} />
            </Grid>
          ))}
        </Box>
      ))}
      <BarSpacer />
      {props.transactions.length === 0 && (
        <Typography>No Transactions</Typography>
      )}
      <BarSpacer />
      <BarSpacer />
      <BarSpacer />
    </Box>
  );
};

export default TransactionList;
