import React from "react";
import moment from "moment";
import styles from "./styles.transactionlist";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const TransactionItem = props => {
  const { classes } = props;

  return (
    <>
      <Grid className={classes["trans-info-container"]}>
        <Grid className={classes.bus}>
          <IconButton
            className={classes["icon-button"]}
            title="Edit Transaction"
            onClick={() => {
              props.updateTransaction(props.trans);
            }}>
            <Edit className={classes.icon} />
          </IconButton>
          <Typography variant="body1" inline>
            {props.trans.business}
          </Typography>
        </Grid>

        <Grid className={classes.amt}>
          <Typography variant="body1" inline>
            ${props.trans.amount}
          </Typography>
          <IconButton
            className={classes["icon-button"]}
            title="Delete Transaction"
            onClick={() => props.confirmDelete(props.trans.id)}>
            <Delete className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default withStyles(styles)(TransactionItem);
