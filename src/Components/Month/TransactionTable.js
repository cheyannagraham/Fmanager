import React from "react";
import db from '../../fstore/fmanager'

const TransactionTable = props => {
  let total = 0;
  return (
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
        {props.monthlyTransactions.map((trans, index) => {
          trans["type"] === "income"
            ? (total += Number( trans["amount"]))
            : (total -= Number( trans["amount"]));
          return (
            <tr key={trans["id"]}>
              <td>{new Date(trans["date"]).toLocaleDateString()}</td>
              <td>{trans["business"]}</td>
              <td>{trans["amount"]}</td>
              <td>{trans["type"]}</td>
              <td><button onClick={()=> deleteTransaction(trans['id'])}>X</button></td>
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

const deleteTransaction = id => {
  console.log(id);
  db.collection('transactions').doc(id).delete()
  .then(() => {
    console.log("Delete Successful!");
  })
  .catch(err => console.log(`Could Not Delete: ${err}`));
}

export default TransactionTable;

// see whats returned from add transaction to see if id is
