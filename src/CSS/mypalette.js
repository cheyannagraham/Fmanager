
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
    },
    palette : {
        'primary': {
            'main':'#37474f',
            'light': '#607d8b',
            'lighter': '#90a4ae',
            'lightest':'#cfd8dc'
        },
        'secondary': {
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