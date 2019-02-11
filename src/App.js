import React, { useState, useEffect } from "react";
import "./App.css";
import Month from "./Components/Month/Month.js";

export default function App() {
  const [totalTransactions, setTotalTransactions] = useState("No Transactions");

  // useEffect(() => {
  //   totalTransactions = fetchTransactions();
  // }, []);

	// return getMonthlyTransactions(totalTransactions);
	return (<h1>return</h1>)
}



const getMonthlyTransactions = (transactions) => {
  let month = new Date(Date.now()).getMonth();

  let monthlyTransactions = transactions.filter(
    transaction => new Date(transaction["date"]).getMonth() === month
  );

  return <Month transactions={monthlyTransactions} month={month} />;
}





const fetchTransactions = () => {
  fetch("./data.JSON")
    .then(res => {
      if (res.status !== 200) {
        throw res.status;
      }
      return res.json();
    })

    .then(resp => {
      return resp;
    })

    .catch(error => error);
};









// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {totalTransactions: ["No Transactions"]};
// 	}

//   componentDidMount = () => {
//     this.fetchTransactions();
// 	};

//   //only called once after component mounts so anything
//   //invoked in here may need to be invoked elsewhere.

// 	fetchTransactions = () => {
//     fetch("./data.JSON")
//       .then(res => {

// 				if (res.status !== 200) {
//           throw res.status;
// 				}
//         return res.json();
//       })

//       .then(resp => {
//         this.setState({ totalTransactions: resp });
//       })

//       .catch(error => error);
//   };

// 	//filter out transactions and send to Month Component
// 	//use current month if no month is provided

// 	getMonthlyTransactions = (month = new Date(Date.now()).getMonth()) => {
// 		let transactions = this.state.totalTransactions;

// 		let monthlyTransactions = transactions.filter(
//       transaction =>
//         new Date(transaction["date"]).getMonth() ===
//         month
//     );

// 		return <Month transactions={monthlyTransactions} month={month} />;
//   };

//   render() {
//     return this.getMonthlyTransactions();
//   }
// }

// export default App;
