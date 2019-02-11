import React from "react";
import { MONTHS } from "./Helper";

export default function Month(props) {
  return (
    <>
      <h2>{MONTHS[props.month]}</h2>

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
          {props.transactions.map(trans => (
            <tr>
              <td>{trans["date"]}</td>
              <td>{trans["business"]}</td>
              <td>{trans["amount"]}</td>
              <td>{trans["type"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
