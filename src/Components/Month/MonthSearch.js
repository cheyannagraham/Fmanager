//dipslay input to search months
import React, {useState} from 'react'
import style from '../../CSS/monthheader.module.css';
import moment from 'moment';


const MonthSearch = props => {

    let currentMonth = moment().format('M');
    const [month, setMonth] = useState(currentMonth);

    const handleClick = (e) => {
        getMonth(e)
        // props.setMonth(e.target.value);
    }

    const getMonth = val => {
        const monthVal = Number(month) + val;
        const newMonth = monthVal === 0 ?
        12 :
        monthVal === 13 ?
        1 :
        monthVal;
        
        setMonth(newMonth);
    }

    return (
        <div id = {style['month-header']} >

            <button onClick = {() => {handleClick(-1)}}>
                la
            </button>
        
            <h2 className = {style.header}>{moment(month,'MM').format('MMMM')}</h2>

            <button onClick = {() => {handleClick(1)}}>
                >
            </button>


        </div>

        
    )
}
export default MonthSearch;