import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const Palette = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          cursor: "pointer"
        }
      },
      MuiFormControl: {
        root: {
          //margin: "10px;"
        }
      },
      MuiDialogContent: {
        root: {
          // padding: "5px",
          // margin: "5px"
        }
      },
      MuiDialogContentText: {
        root: {
          // "margin-bottom": "0"
        }
      },
      MuiSnackbarContent: {
        root: {
          // padding: "0px 5px",
        },
        message: {
          // padding: "0px"
        }
      }
    },
    palette: {
      primary: { main: '#0097A7' },
      secondary: { main: '#FF7043' }
    }
  })
);
console.log(Palette);

export default Palette;
