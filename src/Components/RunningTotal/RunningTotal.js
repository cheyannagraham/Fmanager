import React from 'react';
import style from '../../CSS/runningtotal.module.css';

const RunningTotal = props => {
    return (
        <ul className = {style.total}>
            <li className = {style.li}>
                Total :
            </li>
            <li className = {style.li}>
                ${props.total.toFixed(2)}
            </li> 
        </ul>
    )
}

export default RunningTotal;