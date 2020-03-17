import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const TransactionInfo = props => {

  return (
    <>
      <Grid item xs={5}>
        <Typography noWrap>{props.transaction.business}</Typography>
      </Grid>

      <Grid item xs={3} >
        <Typography noWrap align="right">
          {new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
          }).format(props.transaction.amount)}
        </Typography>
      </Grid>
    </>
  );
};

export default TransactionInfo;
