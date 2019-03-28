import React, { useState, useEffect } from 'react';
import TransactionList from '../Transactions/TransactionList';
// import OTB from '../OutstandingBalance/OutstandingBalance'
import style from '../../CSS/month.module.css';
import moment from 'moment';

const Month = props => {
  let currentMonth = moment().format('M');
  let currentYear = moment().format('YYYY');
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [monthlyTransactions,setMonthlyTransactions] = useState([]);

  const getMonthlyTransactions = (newMonth) => {
    let mt = props.transactions.filter(
      transaction => {
        return moment(transaction.date).format('YYYY') === String(year) && moment(transaction.date).format('M') === String(newMonth)
      }
    )

    setMonthlyTransactions(mt);
    setMonth(newMonth);
  };

  useEffect(() => {
    getMonthlyTransactions(month);
  },[props.transactions]);

  const handleClick = (e) => {
    getMonth(e);
  }

  const getMonth = val => {
    const monthVal = Number(month) + val;
    let newMonth;
    let newYear;

    if(monthVal === 0) {
      newYear = year - 1;
      setYear(newYear);
      newMonth = 12;
    
    } else if( monthVal === 13) {
      newYear = year + 1;
      setYear(newYear);
      newMonth = 1;
    
    } else {
      newMonth = monthVal;
    }
    // const newMonth = monthVal === 0 ?
    // 12 :
    // monthVal === 13 ?
    // 1 :
    // monthVal;
    
    getMonthlyTransactions(newMonth);
  }


  return (
    console.log('year',year),
    <div id= {style['month-content-div']}>
      <div id = {style['month-header']} >

        <button className = {style.button} onClick = {() => {handleClick(-1)}}>
          <i className = {`material-icons ${style.icon}`}>arrow_left</i>
        </button>

        <h2 className = {style.header}>{`${moment(month,'MM').format('MMMM')} ${year}`}</h2>

        <button className = {style.button} onClick = {() => {handleClick(1)}}>
          <i className = {`material-icons ${style.icon}`}>arrow_right</i>
        </button>

      </div>

      <TransactionList setMonthlyTotal = {props.setMonthlyTotal} MonthlyTransactions={monthlyTransactions} setTransactions = {props.setTransactions} />
    </div>
  );
}

export default Month;

//<OTB allTrans = {props.transactions} month = {month} />
