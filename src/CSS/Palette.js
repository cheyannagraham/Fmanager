import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

const Palette = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          cursor: "pointer"
        }
      },
      MuiSnackbarContent: {
        root: {
          [defaultTheme.breakpoints.only("xs")]: {
            padding: "0px 5px"
          }
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

export default Palette;
