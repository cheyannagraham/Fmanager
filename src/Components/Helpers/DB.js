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
      .catch(err => alert(`Error getting documents ${err}`));
};

//Delete Transaction
export const deleteTransaction = id => {
  db.collection('transactions').doc(id).delete()
  .then(() => {
    alert("Delete Successful!");   
  })
  .catch(err => alert(`Could Not Delete: ${err}`));

}

 //Add Transaction
export const addTransaction = trans => {
  return db.collection("transactions")
  .add(trans)
  .then(dref => {
    //add id to transaction object
    trans["id"] = dref.id;

    //on success, display new transaction
    alert('Record Added!')
    return trans;

  })
  .catch(err => `Error adding Transaction: ${err}`);
}    
