import React from "react";
import {addTransaction} from '../Helpers/DBHelper';
import {validateDate} from "../Helpers/DateHelper";

const TransactionForm = props => {
  const handleClick = e => {
    e.preventDefault();
    const userInput = document.getElementById('transaction-date').value;
    const validDate = validateDate(userInput);
    validDate ? submitFormData(validDate) : alert('Invalid Date');
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
