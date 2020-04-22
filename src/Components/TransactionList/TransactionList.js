import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TransactionInfo from "../TransactionInfo/TransactionInfo";
import moment from "moment";
import BarSpacer from "../BarSpacer/BarSpacer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  table: {
    "table-layout": "fixed",
    width: "100%",
  },
  h2: {
    "font-size": "2rem",
    "font-weight": 400
  },
};

const TransactionList = (props) => {
  const { classes } = props;

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
    <Box maxHeight="75vh">
      {sortGroupedTransactions().map((group) => (
        <Table key={group.date} className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell colSpan="2">
                <Typography key={group.date} variant="h2" className={classes.h2}>
                  {props.fullDate
                    ? moment(group.date).format("YYYY MMM DD")
                    : moment(group.date).format("MMM D")}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {group.items.map((transaction) => (
              <TransactionInfo key={transaction.id} transaction={transaction} />
            ))}
          </TableBody>
        </Table>
      ))}
      {props.transactions.length === 0 && (
        <Typography align="center">No Transactions</Typography>
      )}
      {/* Extra space after table */}
      <BarSpacer />
      <BarSpacer />
      <BarSpacer />
    </Box>
  );
};

export default withStyles(styles)(TransactionList);
