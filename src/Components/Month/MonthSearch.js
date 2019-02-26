//dipslay input to search months
import React from 'react'
import {MONTHS} from '../Helpers/DateHelper'


const MonthSearch = props => {

    const handleClick = (e) => {
        props.setMonth(e.target.value);
    }

    return (
        <select value = {props.month} onChange = {handleClick}>
            {MONTHS.map(month => (
                <option key={month} value={MONTHS.indexOf(month) + 1}>{month.toUpperCase()}</option>))}            
        </select>
        
    )
}
export default MonthSearch;