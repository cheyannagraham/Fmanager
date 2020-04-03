import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import UpdateTransaction from "../UpdateTransactionButton/UpdateTransactionButton";
import DeleteTransaction from "../DeleteTransactionButton/DeleteTransactionButton";

const styles = {
  grid: {
    display: "grid",
    "grid-template-columns": "auto 1fr auto",
    "align-items": "center",
  },
  "inner-grid": {
    display: "grid",
    "grid-template-columns": "1.75fr 1fr",
    "align-items": "center",
  },
};

const TransactionInfo = (props) => {
  const { classes } = props;

  return (
    <Box my={2}>
      <Box className={classes.grid}>
        <UpdateTransaction transaction={props.transaction} />
        
        {/* Large View */}
        <Hidden only={"xs"}>
          <Box className={classes["inner-grid"]} mx={1}>
            <Typography noWrap>{props.transaction.business}</Typography>
            <Typography noWrap align="right">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(props.transaction.amount)}
            </Typography>
          </Box>
        </Hidden>

        {/* Mobile View */}
        <Hidden smUp={true}>
          <Box mx={1} overflow="hidden">
            <Typography noWrap>
              <strong>{props.transaction.business}</strong>
            </Typography>
            <Typography noWrap align="right">
              <em>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(props.transaction.amount)}
              </em>
            </Typography>
          </Box>
        </Hidden>
        
        <DeleteTransaction transaction={props.transaction} />
      </Box>
    </Box>
  );
};

export default withStyles(styles)(TransactionInfo);
