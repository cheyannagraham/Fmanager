import myPalatte from "../../CSS/mypalette";

const styles = {
    'paper' : {
        'max-width' : '1200px',
        'min-height' : '300px',
        'margin' : 'auto',
    },
    'thead' : {
        display: 'flex',
        'text-align':'center'
    },
    'thead-cell' : {
        'font-size' : '1.28em',
        color: myPalatte.palette.secondary[400],

    },
    'tcell' : {
        // font
    },
    'tcell-no-trans' : {
        color: myPalatte.palette.primary[400],
        'font-size' : '1.05em',
        border: 'none',
        padding: '15px'
        
    }

}

export default styles;