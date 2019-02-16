import React from "react";
import db from '../../fstore/fmanager';

const TransactionForm = props => {

  const handleClick = e => {
    e.preventDefault();
    submitFormData();
  };

  const submitFormData = () => {
    const form = document.getElementById("transaction-form");
    const formData = new FormData(form);

    const newTransaction = {
        type : formData.get("type"),
        business : formData.get("business"),
        amount : formData.get("amount"),
        date : formData.get("date")
    }

    db.collection('transactions').add(newTransaction)
    .then(dref => console.log(`Success : ${dref}`))
    .catch(err => console.log(`Error: ${err}`));

    props.setTransactions(prevTrans =>[...prevTrans,newTransaction]
    );
    form.reset();
  };

  return (
    <form id="transaction-form" onSubmit = {handleClick}>
      <label>
        Date
        <input name="date" type="date" required />
      </label>

      <label>
        Business
        <input name="business" type="text" placeholder="Target" required />
      </label>

      <label>
        Amount
        <input name="amount" type="number" placeholder="$37" required />
      </label>

      <label>
        Type
        <select name="type" >
          <option value="income">Income</option>
          <option value="purchase">Purchase</option>
        </select>
      </label>

      <button type="submit">
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
