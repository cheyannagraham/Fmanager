import db from '../../fstore/fmanager';

//get all transactions from database
  
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


export const deleteTransaction = id => {
  db.collection('transactions').doc(id).delete()
  .then(() => {
    alert("Delete Successful!");   
  })
  .catch(err => alert(`Could Not Delete: ${err}`));

}
