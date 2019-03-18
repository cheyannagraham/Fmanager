//dipslay input to search months
import React, {useState} from 'react'
import style from '../../CSS/monthheader.module.css';
import moment from 'moment';


const MonthHeader = props => {
    console.log(props);

    // let currentMonth = moment().format('M');
    // const [month, setMonth] = useState(currentMonth);

    const handleClick = (e) => {
        getMonth(e);
    }

    const getMonth = val => {
        const monthVal = Number(props.month) + val;
        const newMonth = monthVal === 0 ?
        12 :
        monthVal === 13 ?
        1 :
        monthVal;
        
        props.setMonth(newMonth);
    }

    return (
        <>
            <div id = {style['month-header']} >

                <button onClick = {() => {handleClick(-1)}}>
                    la
                </button>
            
                <h2 className = {style.header}>{moment(props.month,'MM').format('MMMM')}</h2>

                <button onClick = {() => {handleClick(1)}}>
                    >
                </button>

            </div>
        </>

        
    )
}
export default MonthHeader;