import myPalatte from '../../CSS/mypalette';


const styles = {
    container : {
        'width': '100%',
        'margin': '15px auto'
    },
    'total-head' : {
        'padding': '12px',
        background: myPalatte.palette.secondary[800],
    },
    'total' : {
        padding: '15px'
    },
    'total-value': {
        color: 'green',
        'font-weight' : 'bold'
    },
    'neg' : {
        color: 'red'
    }
}

export default styles
