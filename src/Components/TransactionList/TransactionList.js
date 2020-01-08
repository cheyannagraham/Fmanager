import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import withStyles from "@material-ui/core/styles/withStyles";
import UpdateTransaction from "../UpdateTransaction/UpdateTransaction";
import DeleteTransaction from "../DeleteTransaction/DeleteTransaction";
import TransactionInfo from "../TransactionInfo/TransactionInfo";
import styles from "./styles.transactionlist";
import moment from "moment";

const TransactionList = props => {
  const { classes } = props;

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
    <Grid className={classes["trans-content"]}>
      {sortGroupedTransactions().map(group => (
        <Paper className={classes["trans-paper"]} key={group.date}>
          <Typography color="primary" className={classes.date}>
            {moment(group.date).format("MMM DD")}
          </Typography>
          {group.items.map(transaction => (
            <Grid key={transaction.id}>
              <Grid container spacing={1} alignItems="center">
                <UpdateTransaction transaction={transaction} />
                <TransactionInfo transaction={transaction} />
                <DeleteTransaction transaction={transaction} />
              </Grid>
              <Divider />
            </Grid>
          ))}
        </Paper>
      ))}
      {props.transactions.length === 0 && (
        <Typography color="primary">No Transactions</Typography>
      )}
    </Grid>
  );
};

export default withStyles(styles)(TransactionList);
