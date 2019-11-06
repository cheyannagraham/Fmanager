import React from "react";
import styles from "./styles.transactionlist";
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
      <Grid container spacing={1} alignItems="center">
        <Grid item fluid xs={2}>
          <IconButton
          className={classes["icon-button"]}
          title="Edit Transaction"
          onClick={() => {
            props.updateTransaction(props.trans);
          }}>
            <Edit className={classes.icon} />
          </IconButton>
        </Grid>
          
        <Grid container item xs={6}>
          <Typography variant="body1" block noWrap>
            {props.trans.business}
          </Typography>
        </Grid>

        <Grid container item xs={2}>
          <Typography variant="body1" block>
            <small>$</small>{props.trans.amount}
          </Typography>
        </Grid>
        
        <Grid item xs={2}>
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