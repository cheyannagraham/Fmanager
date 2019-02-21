import React from "react";

const TransactionTable = props => {
  let total = 0;
 
  const sortTransactions = () => {
    props.transactions.sort((prev,next) => {
      return new Date(next.date) - new Date(prev.date);
    });
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
              <td>{trans["date"]}</td>
              <td>{trans["business"]}</td>
              <td>{trans["amount"]}</td>
              <td>{trans["type"]}</td>
              {props.deleteTransaction && 
              <td><button onClick={()=>{props.deleteTransaction(trans['id'])}}>X</button></td>}
              
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