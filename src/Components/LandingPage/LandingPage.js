import React, {useState} from 'react';
import Modal, { CloseModalButton } from '../Modal/Modal';
import { Email, Password, Username } from './Credentials/CredentialComponents';
import { auth } from '../../fb/fb';
import App from '../../App';


const LandingPage = props => {

    const [user,setUser] = useState(null);
    const [showModal,setShowModal] = useState(false);

    auth.onAuthStateChanged(user => {
        setUser(user);
    })

    
    const handleLogin = () => {
        
        setShowModal({
            show:true,
            type: 'login',
            content: 
            <form id = 'login'>
                <Email />
                <Password />
                <button onClick = { 
                    e => {
                            e.preventDefault();
                            const [email,pwd] = getCreds();
                            auth.signInWithEmailAndPassword(email,pwd)
                            .catch(err => setShowModal({
                                type:'error',
                                status:'error',
                                content:
                                <>
                                    <p><b>{err.code}</b></p>
                                    <p>{err.message}</p>
                                    <button onClick={() => setShowModal(false)}>Close</button>
                                </>
                            }))
                            setShowModal(false);
                        }
                    }>
                Login </button>
                <button onClick={() => setShowModal(false)}>Close</button>
            </form>
        });
    }
    
    const handleSignup = () => {
        setShowModal({
            show:true,
            type: 'signup',
            content: 
            <form id = 'signup'>
                <Username />
                <Email />
                <Password />
                <button onClick = { 
                    e => {
                            e.preventDefault();
                            const [email,pwd] = getCreds();
                            auth.createUserWithEmailAndPassword(email,pwd)
                            .catch(err => setShowModal({
                                type:'error',
                                status:'error',
                                content:
                                <>
                                    <p><b>{err.code}</b></p>
                                    <p>{err.message}</p>
                                    <button onClick={() => setShowModal(false)}>Close</button>
                                </>
                            }))
                            setShowModal(false);
                        }
                    }>
                Signup </button>
                <button onClick={() => setShowModal(false)}>Close</button>
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
        user ?
            (<div>
                <h1>HI {auth.currentUser.displayName}</h1>
                <button onClick={signout}>Signout</button>
                {showModal && <Modal content = {showModal} />}
                <App />
            </div>)
            :
            (<div>
                <h1>LandingPage</h1>
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignup}>SignUp</button>
                    {showModal && <Modal content = {showModal} />}
                </div>
            </div>)      

    )
}

export default LandingPage;

//security rules