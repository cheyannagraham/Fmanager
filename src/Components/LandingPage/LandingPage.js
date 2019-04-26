import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { Email, Password, Username } from './Credentials/LoginSignupComponents';
import { auth } from '../../fb/fb';
import App from '../../App';
import LoginPage from './LoginPage/LoginPage';
import LoginForm from './LoginPage/LoginForm';
import Button from '@material-ui/core/Button';



const LandingPage = (props) => {

    const [user,setUser] = useState(null);
    const [showModal,setShowModal] = useState(false);
    const [displayName,setDisplayName] = useState(user && user.displayName);

    auth.onAuthStateChanged(user => {
        setUser(user);
        user && setDisplayName(user.displayName);
    });

    const handleLogin = () => {
        const props = {
            auth: auth,
            getCreds: getCreds,
            setShowModal: setShowModal
        }
        
        setShowModal({
            show:true,
            type: 'login',
            content: <LoginForm {...props} /> 
        });
    }
    
    const handleSignup = () => {
        //for styling form
        //put in .js later
        const variant = "filled"
        setShowModal({
            show:true,
            type: 'signup',
            content: 
            <form id = 'signup'>
                <Username variant = {variant} />
                <Email variant = {variant} />
                <Password variant = {variant} />
                <Button onClick = { 
                    e => {
                            const uName = document.getElementById('username').value;
                            const dName = uName ? (uName[0].toUpperCase()+ uName.slice(1)).trim() : '';
                            e.preventDefault();
                            const [email,pwd] = getCreds();
                            auth.createUserWithEmailAndPassword(email,pwd)
                            .then(() => {
                                //add username to profile
                                auth.currentUser.updateProfile({displayName:dName})
                                .then(() => {
                                    //display username after it's added to profile
                                    setDisplayName(dName);                                    
                                });
                            })
                            .catch(err => setShowModal({
                                show: 'true',
                                type:'error',
                                status:'error',
                                content:
                                <>
                                    <p><b>{err.code}</b></p>
                                    <p>{err.message}</p>
                                    <Button onClick={() => setShowModal(false)}>Close</Button>
                                </>
                            }))
                            setShowModal(false);
                        }
                    }>
                Signup </Button>
                <Button onClick={() => setShowModal(false)}>Close</Button>
            </form>
        })
    }

    const getCreds = () => {
        //should be one form open at a time
        const form = document.querySelector('form');
        return [form['email'].value, form['pwd'].value];
    }

    const signout = () => {
        auth.signOut()
        .catch(err => setShowModal({show:true,type:'error',status:'error',content:err}));
    }

    return (
        <>
            {showModal && <Modal content={showModal} />}
            
            {user ?
                (<div>
                    <h1>HI {displayName}!</h1>
                    <Button onClick={signout}>Signout</Button>
                    <App />
                </div>)
            :
                (<>
                    <LoginPage handleLogin={handleLogin} handleSignup={handleSignup} />
                </>)
            }
        </>
    )
}

export default LandingPage;

//style with tailwind / material design
//research plaid