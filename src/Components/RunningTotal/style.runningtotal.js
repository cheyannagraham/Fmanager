import tstyles from '../Transactions/styles.transactionlist'

const styles = {
    container : {
        width : '100%',
        'max-width' : tstyles.paper['max-width'],
        'margin' : 'auto',
        padding : '5px 0 100px 0',
    },
    'row' : {
        border: 'none'
    },
    'tcell' : {
        'font-size': '1.2em',
        padding : 'none'
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