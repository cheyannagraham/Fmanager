import React, {useState} from 'react'
import TransactionTable from '../Transactions/TransactionTable'
import moment from 'moment';

const OutstandingBalance = props => {
    const [showOTB,setShowOTB] = useState(false);
    const transactionsToDate = props.allTrans.filter(tr => moment(tr['date']).format('MM') <= props.month);


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