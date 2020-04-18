import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TransactionInfo from "../TransactionInfo/TransactionInfo";
import moment from "moment";
import BarSpacer from "../BarSpacer/BarSpacer";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const TransactionList = (props) => {
  // Group Transactions by Date
  const groupTransactions = () => {
    return [...new Set(props.transactions.map((trans) => trans.date))].map(
      (date) => ({
        items: props.transactions.filter((trans) => trans.date === date),
        date: date,
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
      {sortGroupedTransactions().map((group) => (
        <Table key={group.date}>
          <TableHead>
            <TableRow>
              <TableCell colspan="2">
                <Typography key={group.date} variant="h4">
                  {props.fullDate
                    ? moment(group.date).format("YYYY MMM DD")
                    : moment(group.date).format("MMM DD")}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.items.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.business}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
