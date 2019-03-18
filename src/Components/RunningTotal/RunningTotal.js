import React from 'react';
import style from '../../CSS/runningBalance.module.css';

const RunningTotal = props => {
    return (
        <div id = {style['running-total']}>
            <span className = {style.title}>
                Total :
            </span>
            <span className = {style.value}>
                 ${props.total.toFixed(2)}
           </span> 
        </div>
    )
}

export default RunningTotal;