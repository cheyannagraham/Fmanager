import React, { useContext } from "react";
import {
  updateTransaction,
  getTransactions,
  addTransaction
} from "../Helpers/DBHelper";
import { validateDate } from "../Helpers/DateHelper";
import * as FormInputs from "../FormInputs/FormInputs";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.transactionform";
import { TransContext } from "../../App/App";
import moment from "moment";

const TransactionForm = props => {
  const showModal = useContext(ModalContext).setShowModal;
  const [, setTransactions] = useContext(TransContext);
  const currTrans = props.currentTransaction;
  const { classes } = props;

  const handleClick = e => {
    e.preventDefault();
    const userInput = document.getElementById("transaction-date").value;
    const validDate = validateDate(userInput);

    if (validDate) {
      createTransaction(validDate);
    } else {
      showModal({
        show: true,
        title: "Validation Error!",
        type: "error",
        text:
          "Invalid Date. please enter a date between 1-1-1900 and 12-31-2050",
        actions: <CloseModalButton autofocus={true} />
      });
    }
  };

  const createTransaction = date => {
    const type = document.getElementById("transaction-type").value;
    const amount = Math.abs(
      document.getElementById("transaction-amount").value
    );

    const newTrans = {
      type: type,
      business: document.getElementById("transaction-business").value,
      amount:
        type === "income"
          ? Number(amount).toFixed(2)
          : Number(-amount).toFixed(2),
      date: date
    };

    if (props.type === "add") {
      addTransaction(newTrans)
        // add new transaction to local global copy of transactions
        .then(trans => {
          setTransactions(prev => [...prev, trans]);
          showModal({
            show: true,
            title: "Success",
            type: "success",
            text: "New Transaction Added",
            actions: (
              <>
                <Button
                  color="primary"
                  autoFocus
                  variant="contained"
                  onClick={props.saf}
                >
                  Add Another{" "}
                </Button>
                <CloseModalButton />
              </>
            )
          });
        })
        .catch(err =>
          showModal({
            show: true,
            title: "Error Adding New Transaction!",
            type: "error",
            actions: <CloseModalButton autofocus={true} />,
            text: err
          })
        );
    }

    if (props.type === "update") {
      updateTransaction(currTrans.id, newTrans)
        .then(res => {
          getTransactions().then(tr => {
            setTransactions(tr);
            showModal({
              show: true,
              type: "success",
              title: "Update Successful!",
              text: res,
              actions: <CloseModalButton autofocus={true} />
            });
          });
        })
        .catch(err =>
          showModal({
            show: true,
            title: "Update Failed! :( ",
            actions: <CloseModalButton autofocus={true} />,
            text: err,
            type: "error"
          })
        );
    }
  };

  return (
    <form id="transaction-form" onSubmit={handleClick}>
      {/* Date Input */}
      <FormInputs.FormControl
        variant="standard"
        label="Date"
        name="trans-date"
        type="date"
        inputProps={{
          pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
        }}
        id="transaction-date"
        value={(currTrans && currTrans.date) || moment().format("YYYY-MM-DD")}
        autoFocus
        required
      />

      {/* Business Name Input */}
      <FormInputs.FormControl
        variant="standard"
        label="Business"
        id="transaction-business"
        value={currTrans && currTrans.business}
        required
        type="text"
        name="business-name"
      />

      {/* Amount Input */}
      <FormInputs.FormControl
        variant="standard"
        label="Amount"
        name="trans-amount"
        type="number"
        inputProps={{
          step: 0.01
        }}
        id="transaction-amount"
        value={currTrans && currTrans.amount}
        required
      />

      {/* Transaction Type  */}
      <FormInputs.FormControl
        select
        InputLabelProps={{
          shrink: true
        }}
        SelectProps={{
          native: true
        }}
        variant="standard"
        label="Type"
        id="transaction-type"
        name="trans-type"
        value={currTrans && currTrans.type}
        required
      >
        <>
          <option key="income" value="income">
            Income
          </option>
          <option key="purchase" value="purchase">
            Purchase
          </option>
        </>
      </FormInputs.FormControl>

      {/* Form Buttons */}
      <Grid
        container
        justify="flex-end"
        className={classes["button-container"]}
      >
        <Button variant="contained" color="primary" type="submit">
          {props.type}
        </Button>
        <CloseModalButton />
      </Grid>
    </form>
  );
};

export default withStyles(styles)(TransactionForm);
