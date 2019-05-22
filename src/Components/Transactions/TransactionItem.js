import React from "react";
import moment from "moment";
import styles from "./styles.transactionlist";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const TransactionItem = props => {
  const { classes } = props;

  return (
    <TableRow className={classes.trow}>
      <TableCell colSpan={2} align="center" className={classes.tcell}>
          <IconButton className = {classes['icon-button']}
            title="Edit Transaction"
            onClick={() => {
              props.updateTransaction(props.trans);
            }}
          >
            <Edit className={classes.icon} />
          </IconButton>

          {moment(props.trans.date).format("D MMM")}
      </TableCell>

      <TableCell align="center" className={classes.tcell}>
        {props.trans.business}
      </TableCell>

      <TableCell colSpan={2} align="center" className={classes.tcell}>
          ${props.trans.amount}
          <IconButton className = {classes['icon-button']}
            title="Delete Transaction"
            onClick={() => props.confirmDelete(props.trans.id)}
          >
            <Delete className={classes.icon} />
          </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default withStyles(styles)(TransactionItem);
