import React from 'react';

const RunningTotal = props => {
    return (
        <div id = 'running-total'>
            <span>Total:$ {props.total.toFixed(2)} </span> 
        </div>
    )
}

export default RunningTotal;