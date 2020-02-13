//global styles
const myPalatte = {
  overrides: {
    MuiButton: {
      root: {
        cursor: "pointer"
      }
    },
    MuiFormControl: {
      root: {
        margin: "10px;"
      }
    },
    MuiDialogContent: {
      root: {
        padding: "5px",
        margin: "5px"
      }
    },
    MuiDialogContentText: {
      root: {
        "margin-bottom": "0"
      }
    },
    MuiSnackbarContent: {
      root: {
        padding: "0px"
      },
      message: {
        padding: "0px"
      }
    },
  },
  palette: {
    primary: {
      main: "#37474f",
      light: "#546e7a",
      lighter: "#78909c",
      lightest: "#b0bec5"
    },
    secondary: {
      light: "#fbe9e7",
      main: "#ffccbc",
      dark: "#ff7043",
      darker: "#e64a19"
    }
  },
};

export default myPalatte;
