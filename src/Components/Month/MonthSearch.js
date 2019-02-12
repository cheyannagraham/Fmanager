//dipslay input to search months
import React from 'react'
import {MONTHS} from './Helper'


const MonthSearch = props => {

    const handleClick = (e) => {
        props.setMonth(e.target.value);
    }

    return (
        <select value = {props.month} onChange = {handleClick}>
            {MONTHS.map(mon => (
                <option key={mon} value={MONTHS.indexOf(mon)}>{mon.toUpperCase()}</option>))}            
        </select>
        
    )
}
export default MonthSearch;