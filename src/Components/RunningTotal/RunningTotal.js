import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import styles from './style.runningtotal';
import {withStyles} from '@material-ui/core/styles';

const RunningTotal = props => {
  const {classes} = props;

  

	useEffect(() => {
    if(props.runningTotal < 0) document.querySelector('#run-total').classList.add(classes.neg);
    else document.querySelector('#run-total').classList.remove(classes.neg);

    if(props.monthlyTotal < 0) document.querySelector('#monthly-total').classList.add(classes.neg);
    else document.querySelector('#monthly-total').classList.remove(classes.neg);
  }   )

  return (
    <Grid className = {classes.container}>
    <Table className = {classes.table}>

      <TableBody>
        <TableRow >
					<TableCell className = {classes.row} rowSpan = {2} />
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> Monthly Total :</TableCell>
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> 
            <span id = 'monthly-total' className = {classes['total-value']}>
               ${props.monthlyTotal.toFixed(2)} 
            </span>
          </TableCell>
        </TableRow>

        <TableRow >
          <TableCell className = {classes.tcell} padding = 'none' align = 'center'> Running Total :</TableCell>
          <TableCell className = {classes.tcell}  padding = 'none' align = 'center'> 
              <span id='run-total' className = {classes['total-value']}>
                ${props.runningTotal.toFixed(2)}
              </span>
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </Grid>
  );
};

export default withStyles(styles)(RunningTotal);
