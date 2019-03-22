import React from 'react';
import style from '../../CSS/runningtotal.module.css';

const RunningTotal = props => {
    return (

        <div id={style["running-total-div"]}>
            <ul className={style.total}>
                <li className={style.li}>
                    Monthly Total :
                </li>
                <li className={style.li}>
                    ${props.monthlyTotal.toFixed(2)}
                </li>
            </ul>
            
            <ul className={style.total}>
                <li className={style.li}>
                    Running Total :
                </li>
                <li className={style.li}>
                    ${props.runningTotal.toFixed(2)}
                </li>
            </ul>


        </div>

    )
}

export default RunningTotal;