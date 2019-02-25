import React from "react";
import moment from 'moment';
import {deleteTransaction} from '../Helpers/DB';


const TransactionTable = props => {
  let total = 0;
 
  const sortTransactions = () => {
    props.transactions.sort((prev,next) => {
      return moment(next.date) - moment(prev.date);
    });
  }

  const handleDelete = id => {
    deleteTransaction(id);
    //remove from local to prevent another read from firestore
    const trans = props.transactions;
    trans.splice(
      trans.findIndex( trs => trs.id === id),      
    1);

    props.setTransactions(trans)
  }

  return (
    sortTransactions(),
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Business</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {props.transactions.map((trans) => {
          trans["type"] === "income"
            ? (total += Number( trans["amount"]))
            : (total -= Number( trans["amount"]));
          return (
            <tr key={trans["id"]}>
              <td>{moment(trans["date"]).format('MM-DD-YY')}</td>
              <td>{trans["business"]}</td>
              <td><span>$</span>{trans["amount"]}</td>
              <td>{trans["type"]}</td>
              {props.setTransactions && <td><button onClick={() => handleDelete(trans['id'])}>X</button></td>}
              
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan = '100%'>
            <hr></hr>
          </td>
          </tr>

          <tr>
          <th colSpan='2'>Total</th>
          <td colSpan='2'>{total}</td>
        </tr>
      </tfoot>
    </table>

  );
};


export default TransactionTable;