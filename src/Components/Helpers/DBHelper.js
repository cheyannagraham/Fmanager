import db from '../../fstore/fmanager';

//Retrieve all transactions  
export const getTransactions = () => {
  return db.collection("transactions")
    .get()
    .then(results => {
      let tr = [];
      results.forEach(doc => {
        tr.push(Object.assign(doc.data(), { id: doc.id }));
      });
      return tr;
    })
    .catch(err => `Error getting documents ${err}`);
};

//Delete Transaction
export const deleteTransaction = id => {
  return db.collection('transactions').doc(id).delete()
  .then(() => "Delete Successful!")
  .catch(err => `Could Not Delete: ${err}`);
}

 //Add Transaction
export const addTransaction = trans => {
  return db.collection("transactions")
  .add(trans)
  .then(dref => {
    //add id to transaction object
    trans["id"] = dref.id;
    return trans;
  })
  .catch(err => `Error adding Transaction: ${err}`);
} 
//Update Transaction
export const updateTransaction = trans => {
  return db.collection('transactions').doc(trans.id).set(trans)
  .then(() => "Update Successful!")
  .catch(err => `Could Not Update: ${err}`);
}
