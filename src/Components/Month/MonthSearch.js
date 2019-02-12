//dipslay input to search months
import React from 'react'
import {MONTHS} from './Helper'


export default function MonthSearch(props){

    const handleClick = (e) => {
        props.setMonth(e.target.value);
    }

    return (
        <select value = {props.month} onChange = {handleClick}>
            {MONTHS.map(mon => (
                <option key={mon} value={MONTHS.indexOf(mon)}>{mon.toLocaleUpperCase()}</option>))}            
        </select>
        
    )
}

//{/* <input value = {value} onChange = {handleClick}></input>  */}