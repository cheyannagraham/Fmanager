import React,{useContext} from "react";
import moment from 'moment';
import {deleteTransaction,getTransactions} from '../Helpers/DBHelper';
import { ModalContext } from "../../App";



const TransactionTable = props => {
  let total = 0;
  const showModal = useContext(ModalContext).setShowModal;
 
  const sortTransactions = () => {
    props.MonthlyTransactions.sort((prev,next) => {
      return moment(next.date) - moment(prev.date);
    });
  }

  const handleDelete = id => {
    deleteTransaction(id)
    .then(() => {
      showModal({show:true, type:'alert',content: 'Delete Sucessful!'});
     getTransactions()
     .then(results => props.setTransactions(results))      
      .catch(err => showModal({show:true, type:'alert',content: err}));

     
      
      //remove from local to prevent another read from firestore
      //ERROR: only updating monthly transactions, not entire list so does not work without access totoal transactions
      //       {
      //       // const trans = props.MonthlyTransactions;
      //       // console.log(trans.length)
      //       // const deletedTrans = trans.findIndex( trs => trs.id === id)
      //       // trans.splice(deletedTrans,1);
      //       // console.log(trans.length)

      //       // props.setTransactions(trans)
      //        }
      

    })
    .catch(err => alert(err))  
  }

  return (
    sortTransactions(),
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Business</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        {props.MonthlyTransactions.map((trans) => {
          trans["type"] === "income"
            ? (total += Number( trans["amount"]))
            : (total -= Number( trans["amount"]));
          return (
            <tr key={trans["id"]}>
              <td>{moment(trans["date"]).format('MM-DD-YY')}</td>
              <td>{trans["business"]}</td>
              <td><span>$</span>{trans["amount"]}</td>
              <td>{trans["type"]}</td>
              {props.setTransactions && <td><button onClick={() => handleDelete(trans['id'])}>X</button></td>}
              
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan = '100%'>
            <hr></hr>
          </td>
          </tr>

          <tr>
          <th colSpan='2'>Total</th>
          <td colSpan='2'>${Number(total).toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>

  );
};


export default TransactionTable;