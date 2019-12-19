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
      return transactions;
    })
    .catch(err => err);
};

//Delete Transaction
export const deleteTransaction = id => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .doc(id)
    .delete()
    .then(() => "Transaction has been deleted from your records.")
    .catch(err => err);
};

//Add Transaction
export const addTransaction = trans => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .add(trans)
    .then(dref => {
      //add id to transaction object
      trans.id = dref.id;
      return trans;
    })
    .catch(err => err);
};

//Update Transaction
export const updateTransaction = (transId, trans) => {
  return db
    .collection(`user_trans/${user()}/transactions`)
    .doc(transId)
    .set(trans)
    .then(() => "Transaction record has been updated.")
    .catch(err => err);
};
