import {useState,useEffect} from 'react';
import {getRunningBalance} from '../Helpers/DBHelper';

const RunningBalance = props => {
    const [rb,setRb] = useState(0);
  
    useEffect(() => {
      getRunningBalance()
      .then(result => setRb(result))
    })
    return Number(rb).toFixed(2);
  }

  
  export default RunningBalance