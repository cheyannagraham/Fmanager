import React from 'react';

const TransactionForm = props => {
    return (
        
        <form id="transaction-from" action="">
            <label>Date
            <input name = "date" type = "date"></input></label>
            
            <label>Business
            <input name = "business" type = "text" placeholder = "Target"></input></label>
            
            <label>Amount
            <input name = "amount" type = "number" placeholder = "$37"></input></label>
            
            <label>Type
                <select name = "type">
                    <option value="income">Income</option>
                    <option value="purchase">Purchase</option>
                </select>
            </label>

            <button onClick = {handleClick}>Add</button>
        </form>
    )


}

const handleClick = e => {
    e.preventDefault();
    submitFormData();
}

const submitFormData = () => {
    const formData = new FormData(document.getElementById('transaction-from'));

    let type = formData.get("type");
    let business = formData.get("business");
    let amount = formData.get("amount");
    let date = formData.get("date");
    console.log(type,business,amount,date);
}

export default TransactionForm;