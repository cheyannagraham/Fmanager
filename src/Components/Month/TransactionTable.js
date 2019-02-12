import React from "react";

const TransactionTable = props => {
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
        {props.monthlyTransactions.map((trans, index) => (
          <tr key={index}>
            <td>{trans["date"]}</td>
            <td>{trans["business"]}</td>
            <td>{trans["amount"]}</td>
            <td>{trans["type"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
