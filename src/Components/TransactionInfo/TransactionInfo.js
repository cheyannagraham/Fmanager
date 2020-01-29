import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles.transactioninfo";

const TransactionInfo = props => {
  const { classes } = props;

  return (
    <>
      <Grid item xs={5}>
        <Typography color="primary" noWrap>
          {props.transaction.business}
        </Typography>
      </Grid>

      <Grid item xs={3} className={classes.right}>
        <Typography color="primary">
          <small>$</small>
          {props.transaction.amount}
        </Typography>
      </Grid>
    </>
  );
};

export default withStyles(styles)(TransactionInfo);