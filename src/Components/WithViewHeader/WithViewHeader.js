import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowRight from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "./styles.withviewheader";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { FormControl } from "../FormControls/FormControls";
import TodayButton from "../TodayButton/TodayButton";
import moment from "moment";

const WithViewHeader = props => {
  const { classes } = props;
  let showModal = useContext(ModalContext).setShowModal;

  // Increment & Decrement Date values
  const handleClick = eventVal => {
    const changeType = props.view === "monthly" ? "months" : "days";

    props.setDate(
      eventVal === 1
        ? moment(props.date)
            .add(1, changeType)
            .format("YYYY-MM-DD")
        : moment(props.date)
            .subtract(1, changeType)
            .format("YYYY-MM-DD")
    );
  };

  const setDate = eventVal => {
    props.setDate(moment(eventVal.target.value).format("YYYY-MM-DD"));
  };

  const showCalendar = () => {
    showModal({
      show: true,
      title: "Go To Date",
      content: (
        <form id="goto-date-form" onChange={setDate}>
          <FormControl
            variant="outlined"
            label="Date"
            type="date"
            id="goto-date"
            value={props.date}
            required
            autoFocus
          />
        </form>
      ),
      actions: <CloseModalButton form="goto-date-form" type="submit" />
    });
  };

  return (
    <Box
      display="flex"
      flexWrap="no-wrap"
      justify="center"
      alignItems="center"
      className={classes.header}
    >
      <IconButton
        color="primary"
        className={classes.ibutton}
        onClick={() => {
          handleClick(-1);
        }}
      >
        <ArrowLeft className={classes.icon} />
      </IconButton>

      <ButtonBase onClick={showCalendar}>
        <Typography
        
        variant="h6"
        color="primary"
        className={classes.title}
      >
        {props.view === "monthly"
          ? moment(props.date).format("MMMM YYYY")
          : moment(props.date).format("MMM DD, YYYY")}
      </Typography>
        </ButtonBase>

      <IconButton
        color="primary"
        className={classes.ibutton}
        onClick={() => {
          handleClick(1);
        }}
      >
        <ArrowRight className={classes.icon} />
      </IconButton>
      <TodayButton
        className={[classes.ibutton, classes.icon]}
        color="primary"
        setDate={props.setDate}
      />
    </Box>
  );
};

export default withStyles(styles)(WithViewHeader);
