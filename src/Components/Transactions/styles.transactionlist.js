import myPalatte from "../../CSS/mypalette";

const styles = {
    'paper' : {
        'max-width' : '1000px',
        'min-height' : '300px',
        'margin' : 'auto',
    },
    'thead-cell' : {
        'font-size' : '1.28em',
        color: myPalatte.palette.secondary[400],
        padding: 'none'

    },
    'tcell' : {
        'font-size' : '1em',
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
        'font-size': '0.7em',
        padding: 'none'
    },

}

export default styles;