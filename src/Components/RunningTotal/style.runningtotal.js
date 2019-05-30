import tstyles from '../Transactions/styles.transactionlist';
import myPalatte from '../../CSS/mypalette';


const styles = {
    container : {
        'max-width' : tstyles['trans-paper']['max-width'],
        'margin' : tstyles['trans-paper']['margin'],
        'width' : tstyles['trans-paper']['width'],
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
