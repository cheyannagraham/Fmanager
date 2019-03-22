import React from 'react';
import style from '../../CSS/Total.module.css';

const Total = props => {
    return (

        <div id={style["running-total-div"]}>
            <ul className={style.total}>
                <li className={style.li}>
                    Total :
                </li>
                <li className={style.li}>
                    ${props.total.toFixed(2)}
                </li>
            </ul>
            
            <ul className={style.total}>
                <li className={style.li}>
                    Monthly Balance :
                </li>
                <li className={style.li}>
                    ${props.monthlyTotal.toFixed(2)}
                </li>
            </ul>


        </div>

    )
}

export default Total;