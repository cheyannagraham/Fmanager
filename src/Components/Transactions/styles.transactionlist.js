import myPalatte from "../../CSS/mypalette";

const styles = {
    'paper' : {
        'max-width' : '1000px',
        'height' : '65vh',
        'margin' : 'auto',
        'overflow': 'auto'
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
    },
    'icon-button' : {
        'display': 'none',
    }

    
}

export default styles;