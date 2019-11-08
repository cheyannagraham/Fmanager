
//global styles
const myPalatte = {
    overrides: {
        MuiButton : {
            root : {
                margin: '15px',
                cursor: 'pointer'
            }
        },
        MuiFormControl : {
            root: {
                margin: '10px;'
            }
        },
        'MuiDialogContent' : {
            root: {
                'padding': '5px'
            }
        },
        'MuiDialogContentText': {
            'root' : {
                'margin-bottom': '0'
            }
        }
    },
    palette : {
        'primary': {
            'main':'#37474f',
            'light': '#546e7a',
            'lighter': '#78909c',
            'lightest':'#b0bec5'
        },
        'secondary': {
            'light': '#fbe9e7',
            'main': '#ffccbc',
            'dark': '#ff7043',
            'darker': '#e64a19',
        }
    },
    typography: {
        useNextVariants: true
    }
}

export default myPalatte;