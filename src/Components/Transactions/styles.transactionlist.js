import myPalatte from "../../CSS/mypalette";

const styles = {
    'trans-paper' : {
        'margin': '20px auto',

    },
    'trans-date' : {
        background: myPalatte.palette.secondary[100],
        padding: '5px'
    },
    bus : {
        flex: 3,
        padding: '10px',
        'white-space': 'nowrap',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis'
    },
    'amt' : {
        flex: '1',
        'text-align':'right',
        padding: '10px',
    },
    'trans-info-container' : {
        'display' : 'flex',
    },
    'thead-cell' : {
        'font-size' : '1em',
        color: myPalatte.palette.secondary[400],

    },
    'tcell' : {
        'font-size' : '0.98em',
        'font-style' : 'italic',
        'color' : myPalatte.palette.secondary[600],
    },
    'tcell-no-trans' : {
        color: myPalatte.palette.primary[400],
        'font-size' : '1.05em',
        border: 'none',
        padding: '15px'        
    },
    icon : {
        'font-size': '0.58em',
    }    
}

export default styles;