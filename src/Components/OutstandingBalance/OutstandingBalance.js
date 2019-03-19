import React, {useState} from 'react'
import TransactionList from '../Transactions/TransactionList'
import moment from 'moment';

const OutstandingBalance = props => {
    const [showOTB,setShowOTB] = useState(false);

    const filterTransactions = () => {
        const transactionsToDate = props.allTrans.filter(tr => Number(moment(tr.date).format('MM')) <= Number(props.month));
        
        return <TransactionList MonthlyTransactions = {transactionsToDate} />
    }


    const handleClick = () => {
        setShowOTB(state => !state);
    }

    return (
        <>
            <button onClick = {handleClick}>{showOTB ? 'Hide BTD':'Show BTD'}</button>
            {showOTB && filterTransactions()}
        </>
    )

}

export default OutstandingBalance;