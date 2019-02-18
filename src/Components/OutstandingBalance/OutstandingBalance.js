import React, {useState} from 'react'
import TransactionTable from '../Month/TransactionTable'

const OutstandingBalance = props => {
    const [showOTB,setShowOTB] = useState(false);
    const transactionsToDate = props.allTrans.filter(tr => new Date(tr['date']).getMonth() <= props.month);


    const handleClick = () => {
        setShowOTB(state => !state);
    }

    return (
        <>
            <button onClick = {handleClick}>{showOTB ? 'Hide BTD':'Show BTD'}</button>
            {showOTB && <TransactionTable transactions = {transactionsToDate} />}
        </>
    )

}

export default OutstandingBalance;