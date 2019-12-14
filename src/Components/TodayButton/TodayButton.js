import React from 'react';
import moment from 'moment';

// Go to today
const TodayButton = props => {
    const handleClick = () => {
        props.setMonth(moment().format("M"));
        props.setYear(moment().format("YYYY"));
    }

    return (
        <button onClick={handleClick}>Today</button>
    )
}

export default TodayButton;