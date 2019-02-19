import React from "react";
import db from "../../fstore/fmanager";

const TransactionForm = props => {
  const handleClick = e => {
    console.log('handleClick');
    e.preventDefault();
    submitFormData();
  };

  const submitFormData = () => {
    const form = document.getElementById("transaction-form");
    const formData = new FormData(form);
    let newTransaction;
    
    //check for get() method on formData
    if(formData.get){
      newTransaction = {
        type: formData.get("type"),
        business: formData.get("business"),
        amount: formData.get("amount"),
        date: formData.get("date")
      };
    }

    else {
      //IE EDGE
      console.log('no FormData.get() method');
      newTransaction = {
        type: document.getElementById('transaction-type').value,
        business: document.getElementById('transaction-business').value,
        amount: document.getElementById('transaction-amount').value,
        date: document.getElementById('transaction-date').value
      };
    }

    

    //add transaction to dbase
    db.collection("transactions")
      .add(newTransaction)
      .then(dref => {
        //add id to transaction object
        newTransaction['id'] = dref.id;
        
        //on success, display new transaction
        props.setTransactions(prevTrans => [...prevTrans, newTransaction]);
        form.reset();
      })
      .catch(err => console.log(`Error adding Transaction: ${err}`));
  };

  return (
    <form id="transaction-form" onSubmit={handleClick}>
      <label>
        Date
        <input id="transaction-date" name="date" type="date" required />
      </label>

      <label>
        Business
        <input id="transaction-business" name="business" type="text" placeholder="Target" required />
      </label>

      <label>
        Amount
        <input id="transaction-amount" name="amount" type="number" placeholder="$37" required />
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
