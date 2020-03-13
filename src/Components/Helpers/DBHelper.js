import db from "../../fb/fb";
import { auth } from "../../fb/fb";

const user = () => auth.currentUser.uid;

//Retrieve all transactions
export const getTransactions = () => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .get()
    .then(results => {
      let transactions = [];
      results.forEach(doc => {
        transactions.push(Object.assign(doc.data(), { id: doc.id }));
      });
      //throw Error("Throw Get Transactions");
      return transactions;
    });
};

//Delete Transaction
export const deleteTransaction = id => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .doc(id)
    .delete()
    .then(error => {
      //throw Error("Throw Delete");
      return error;
    });
};

//Add Transaction
export const addTransaction = trans => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .add(trans)
    .then(dref => {
      //add id to transaction object
      trans.id = dref.id;
      //throw Error("Throw Add");
      return trans;
    });
};

//Update Transaction
export const updateTransaction = (transId, trans) => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .doc(transId)
    .set(trans)
    .then(error => {
      //throw Error("Throw Update");
      return error;
    });
};
