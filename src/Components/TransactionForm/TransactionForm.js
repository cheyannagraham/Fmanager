import React from "react";

const TransactionForm = props => {

  const handleClick = e => {
    e.preventDefault();
    submitFormData();
  };

  const submitFormData = () => {
    const formData = new FormData(document.getElementById("transaction-form"));

    const newTransaction = {
        type : formData.get("type"),
        business : formData.get("business"),
        amount : formData.get("amount"),
        date : formData.get("date")
    }

    props.setTransactions(prevTrans =>[...prevTrans,newTransaction]
    );
  };

  return (
    <form id="transaction-form" action="">
      <label>
        Date
        <input name="date" type="date" />
      </label>

      <label>
        Business
        <input name="business" type="text" placeholder="Target" />
      </label>

      <label>
        Amount
        <input name="amount" type="number" placeholder="$37" />
      </label>

      <label>
        Type
        <select name="type">
          <option value="income">Income</option>
          <option value="purchase">Purchase</option>
        </select>
      </label>

      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
