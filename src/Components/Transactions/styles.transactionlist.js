import myPalatte from "../../CSS/mypalette";

const styles = {
    'trans-paper' : {
        'margin': '20px auto',
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
        'overflow-y':'scroll',
        'overflow-x': 'hidden'
    },
}

export default styles;