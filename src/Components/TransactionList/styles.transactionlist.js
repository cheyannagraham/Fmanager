import myPalatte from "../../CSS/mypalette";

const styles = {
    'trans-paper' : {
        'margin': '25px auto',
    },
    'date' : {
        background: myPalatte.palette.secondary.light,
        padding: '5px'
    },
    icon : {
        'font-size': '0.58em',
    },
    'trans-content': {
        'width': '100%',
        'font-style': 'italic',
        'max-height': '85vh',
        'overflow-y':'auto',
        'overflow-x': 'hidden'
    },
    'right': {
        'text-align':'right'
    }
}

export default styles;