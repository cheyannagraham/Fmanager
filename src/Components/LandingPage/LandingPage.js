import React, {useState} from 'react';
import Modal, { CloseModalButton } from '../Modal/Modal';
import { Email, Password, Username } from './Credentials/CredentialComponents';
import { auth } from '../../fstore/fmanager';


const LandingPage = props => {

    const [showModal,setShowModal] = useState(false);
    
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
                            alert('login!');
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
                            console.log(email,pwd);
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
        return [form['email'].value,form['pwd'].value];
    }

    return (
        <div>
            <h1>LandingPage</h1>
            <div>
                <button onClick = {handleLogin}>Login</button>
                <button onClick = {handleSignup}>SignUp</button>
            </div>
            {showModal && <Modal content = {showModal} />}
        </div>
    )
}

export default LandingPage;