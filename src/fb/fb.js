import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = 
{
  apiKey: process.env['REACT_APP_KEY'],
  databaseURL: process.env['REACT_APP_DURL'],
  projectId: `${process.env['REACT_APP_PID']}`,
};
firebase.initializeApp(config);
const db = firebase.firestore();

export const auth = firebase.auth();
export default db;
