import blueGrey from '@material-ui/core/colors/blueGrey'
import orange from '@material-ui/core/colors/orange'
import blue from '@material-ui/core/colors/lightBlue'

//global styles
const myPalatte = {
    overrides: {
        MuiButton : {
            root : {
                margin: '15px',
                cursor: 'pointer'
            }
        }
    },
    palette : {
        primary: orange,
        secondary: blueGrey,
        third: blue
    },
    typography: {
        useNextVariants: true
    }
}

export default myPalatte;