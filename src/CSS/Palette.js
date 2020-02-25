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
      primary: { main: "#00838f" },
      secondary: { main: "#FF7043" },
      text: {
        primary: "#4d3622"
      }
    }
  })
);
console.log(Palette);

export default Palette;
