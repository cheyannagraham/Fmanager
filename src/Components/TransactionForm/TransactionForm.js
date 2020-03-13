import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { updateTransaction, addTransaction } from "../Helpers/DBHelper";
import { ModalContext } from "../../App/App";
import { CloseModalButton } from "../Modal/Modal";
import { TransContext } from "../../App/App";
import Catch from "../Catch/Catch";
import formReducer from "../Helpers/formReducer";
import { FormControl } from "../FormControls/FormControls";
import moment from "moment";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

const TransactionForm = props => {
  const modalContent = useContext(ModalContext);
  const snackbar = useSnackbar();
  const [transactions, setTransactions] = useContext(TransContext);
  const currTrans = props.currentTransaction;

  // Form State
  const [formState, formDispatch] = useReducer(formReducer, {
    type: (currTrans && currTrans.type) || "income",
    date: (currTrans && currTrans.date) || moment().format("YYYY-MM-DD"),
    amount: (currTrans && currTrans.amount) || "",
    business: (currTrans && currTrans.business) || ""
  });

  // Date Validation
  const validateDate = evt => {
    evt.preventDefault();
    moment(formState.date).isValid()
      ? createTransaction()
      : alert("Invalid Date");
  };

  const createTransaction = () => {
    modalContent({ show: false });
    formState.amount =
      formState.type === "income"
        ? Math.abs(formState.amount).toFixed(2)
        : (Math.abs(formState.amount) * -1).toFixed(2);

    if (props.type === "add") {
      addTransaction(formState)
        // add new transaction to local global copy of transactions
        .then(trans => {
          setTransactions(prev => [...prev, trans]);
          snackbar({
            text: "Transaction Added!",
            variant: "success"
          });
          throw new Error("me :)");
        })
        .catch(error => {
          snackbar({
            text: "Transaction Error!",
            variant: "error",
            actions: (
              <Button
                color="inherit"
                onClick={() =>
                  modalContent(Catch({ error: error, title: "Add Error" }))
                }
              >
                Info
              </Button>
            )
          });
        });
    }

    if (props.type === "update") {
      updateTransaction(currTrans.id, formState)
        .then(() => {
          setTransactions([
            ...transactions.filter(trans => trans.id !== currTrans.id),
            { ...formState, id: currTrans.id }
          ]);
          snackbar({
            text: "Transaction Updated!",
            variant: "success"
          });
          throw new Error("me :)");
        })
        .catch(error =>
          snackbar({
            text: "Update Failed!",
            variant: "error",
            actions: (
              <Button
                color="inherit"
                onClick={() =>
                  modalContent(Catch({ error: error, title: "Update Error" }))
                }
              >
                Info
              </Button>
            )
          })
        );
    }
  };

  return (
    <form id="transaction-form" onSubmit={validateDate}>
      {/* Date Input */}
      <FormControl
        label="Date"
        name="trans-date"
        type="date"
        variant="standard"
        inputProps={{
          pattern: "[0-9]{2}/[0-9]{2}/[0-9]{4}"
        }}
        id="transaction-date"
        value={formState.date}
        autoFocus
        onChange={evt =>
          formDispatch({ input: "date", value: evt.target.value })
        }
        required
      />

      {/* Business Name Input */}
      <FormControl
        label="Business"
        id="transaction-business"
        value={formState.business}
        variant="standard"
        onChange={evt =>
          formDispatch({ input: "business", value: evt.target.value })
        }
        required
        type="text"
        name="business-name"
      />

      {/* Amount Input */}
      <FormControl
        label="Amount"
        name="trans-amount"
        type="number"
        variant="standard"
        inputProps={{
          step: 0.01
        }}
        id="transaction-amount"
        value={formState.amount}
        onChange={evt =>
          formDispatch({ input: "amount", value: evt.target.value })
        }
        required
      />

      {/* Transaction Type  */}
      <FormControl
        select
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
        SelectProps={{
          native: true
        }}
        label="Type"
        id="transaction-type"
        name="trans-type"
        value={formState.type}
        onChange={evt =>
          formDispatch({ input: "type", value: evt.target.value })
        }
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
      </FormControl>

      {/* Form Buttons */}
      <DialogActions>
        <Button variant="contained" color="secondary" type="submit">
          {props.type}
        </Button>
        <CloseModalButton />
      </DialogActions>
    </form>
  );
};

export default TransactionForm;
