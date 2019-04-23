import blueGrey from '@material-ui/core/colors/blueGrey'
import orange from '@material-ui/core/colors/orange'


const myPalatte = {
    overrides: {
        MuiButton : {
            root : {
                margin: '10px'
            }
        }
    },
    palette : {
        primary: blueGrey,
        secondary: orange
    },
    typography: {
        useNextVariants: true
    }
}

// const myPalatte = {
//     overrides: {
//         MuiButtonBase: {
//             root: {
//                 padding: '15px',
//                 margin: '10px'
//             }
//         },
//         MuiButton: {
//             label: {
//                 background:orange,
//                 color: blueGrey,
//             },
//             contained: {
//                 background: 'yellow'
//             }
//         }
//     },
//         typography: {
//         useNextVariants: true
//     }
// }

export default myPalatte;