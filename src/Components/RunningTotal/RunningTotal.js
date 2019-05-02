import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import styles from './style.runningtotal';
import {withStyles} from '@material-ui/core/styles';

const RunningTotal = props => {
	const {classes} = props;
	

  return (
    <Table className = {classes.table}>

      <TableBody>
        <TableRow >
					<TableCell className = {classes.row} rowSpan = {2} />
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> Monthly Total :</TableCell>
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> ${props.monthlyTotal.toFixed(2)}</TableCell>
        </TableRow>

        <TableRow >
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> Running Total :</TableCell>
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> ${props.runningTotal.toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(RunningTotal);
