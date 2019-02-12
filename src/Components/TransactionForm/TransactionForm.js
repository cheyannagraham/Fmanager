import React from 'react';

const TransactionForm = props => {
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

        props.setTransactions(prevTrans => {
            prevTrans.push(
                {type : type,
                business : business,
                amount : amount,
                date : date}
            );
                
            return prevTrans;

        })
    }

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



export default TransactionForm;