import React from "react";
import moment from "moment";
import styles from './styles.transactionlist'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import {withStyles} from '@material-ui/core/styles';
import { updateTransaction } from "../Helpers/DBHelper";

const TransactionItem = props => {
  const { classes } = props;

  return (
      <TableRow className={classes.trow}>
        
        <TableCell padding = 'none' align = 'right'>
          <IconButton onClick = { () => {props.updateTransaction(props.trans)}}>
            <Edit className = {classes.icon} />
          </IconButton>
        </TableCell>

        <TableCell align = 'center' className={classes.tcell}>
          {moment(props.trans.date).format("D MMM")}
        </TableCell>

        <TableCell align = 'center' className={classes.tcell}>
          {props.trans.business}
          </TableCell>

        <TableCell align = 'center' className={classes.tcell}>
          ${props.trans.amount}
        </TableCell>

        <TableCell padding = 'none' align = 'left'>
          <IconButton>
            <Delete className = {classes.icon} onClick = {props.confirmDelete} />
          </IconButton>
        </TableCell>
        
      </TableRow>
  );
};

export default withStyles(styles)(TransactionItem);
