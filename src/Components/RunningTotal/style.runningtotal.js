import myPalatte from "../../CSS/mypalette";

const styles = {
  container: {
    margin: "15px auto",
    width: "100%"
  },
  "total-head": {
    padding: "12px",
    background: myPalatte.palette.primary.light,
    color: myPalatte.palette.secondary.light
  },
  total: {
    padding: "15px"
  },
  "total-value": {
    "font-weight": "bold",
    color: "green"
  },
  neg: {
    color: "red"
  }
};

export default styles;
