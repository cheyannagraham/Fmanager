import React from "react";
import { MONTHS } from "./Helper";

class Month extends React.Component {
  //constructor & CDM only happens once. after rerender, it
  //is not invoked when props or state changes

  // getBusinesses = () => {
  //     const business = this.props.month;
  //     for(let bus in business) {
  //         console.log(bus,business[bus])
  //     }

  // }

  render() {
    return (
      <>
        <h2>{MONTHS[this.props.month]}</h2>

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
              {this.props.transactions.map(trans => (
                <tr>
                    <td>{trans['date']}</td>
                    <td>{trans['business']}</td>
                    <td>{trans['amount']}</td>
                    <td>{trans['type']}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Month;

// trans.map(tran => {
//     <h3>Purchases</h3>
//     <h3>Income</h3>
//     <h3>Balance</h3>

// })
