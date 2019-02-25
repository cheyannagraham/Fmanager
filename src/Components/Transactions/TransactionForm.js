import React from "react";
import {addTransaction} from '../Helpers/DB';
import moment from "moment";
import { DATEF } from "../Helpers/Helper";

const TransactionForm = props => {
  const handleClick = e => {
    e.preventDefault();
    validateDate();
  };

  const validateDate = () => {
    const userInput = document.getElementById("transaction-date").value;
    const date = moment(userInput, DATEF);

    const minDate = moment("1900-01-01");
    const maxDate = moment("2050-12-31");

    if (date < maxDate && date > minDate) {
      submitFormData(date.format('YYYY-MM-DD'));
    } else {
      alert("invalid date");
    }
  };

  const submitFormData = (date) => {
    const form = document.getElementById("transaction-form");

      const newTransaction = {
        type: document.getElementById("transaction-type").value,
        business: document.getElementById("transaction-business").value,
        amount: Number(document.getElementById("transaction-amount").value).toFixed(2),
        date: date
      };

      addTransaction(newTransaction)
      .then(newTrans => {
        props.setTransactions(prevTrans => [...prevTrans, newTrans]);
        form.reset();
        document.getElementById("transaction-date").focus();
        alert('Transaction Added!')
      })
      .catch(err => alert(err));

    // //add transaction to dbase
    // db.collection("transactions")
    //   .add(newTransaction)
    //   .then(dref => {
    //     //add id to transaction object
    //     newTransaction["id"] = dref.id;

    //     //on success, display new transaction
    //     alert('Record Added!')
    //     props.setTransactions(prevTrans => [...prevTrans, newTransaction]);
    //     form.reset();
    //     document.getElementById("transaction-date").focus();
    //   })
    //   .catch(err => alert(`Error adding Transaction: ${err}`));
  };

  return (
    <form id="transaction-form" onSubmit={handleClick}>
      <label>
        Date
        <input
          id="transaction-date"
          name="date"
          type="date"
          placeholder="mm/dd/yyyy"
          required
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
        />
      </label>

      <label>
        Business
        <input
          id="transaction-business"
          name="business"
          type="text"
          placeholder="Target"
          required
        />
      </label>

      <label>
        Amount
        <input
          id="transaction-amount"
          name="amount"
          type="number"
          placeholder="$37"
          required
          step="0.01"
        />
      </label>

      <label>
        Type
        <select id="transaction-type" name="type">
          <option value="income">Income</option>
          <option value="purchase">Purchase</option>
        </select>
      </label>

      <button type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
