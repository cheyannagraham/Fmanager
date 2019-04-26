import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import { auth } from '../../fb/fb';
import LoginPage from './LoginPage/LoginPage';
import LoginForm from './LoginPage/LoginForm';
import SignupForm from './Signup/SignupForm';
import Home from './Signup/Home';



const LandingPage = (props) => {

    const [user,setUser] = useState(null);
    const [showModal,setShowModal] = useState(false);
    const [displayName,setDisplayName] = useState(user && user.displayName);

    auth.onAuthStateChanged(user => {
        setUser(user);
        user && setDisplayName(user.displayName);
    });
    
    const getCreds = () => {
        //should be one form open at a time
        const form = document.querySelector('form');
        return [form['email'].value, form['pwd'].value];
    }

    const prop = {
        auth: auth,
        getCreds: getCreds,
        setShowModal: setShowModal
    }

    const handleLogin = () => {
        
        setShowModal({
            show:true,
            'title': 'login',
            content: <LoginForm {...prop} /> 
        });
    }
    
    const handleSignup = () => {

        setShowModal({
            show:true,
            title: 'signup',
            content: <SignupForm {...Object.assign({},prop,{setDisplayName: setDisplayName})} />
        })
    }


    const signout = () => {
        auth.signOut()
        .catch(err => setShowModal({show:true,type:'error',title:'error',text:err}));
    }

    return (
        <>
            {showModal && <Modal content={showModal} />}
            
            {user ? 
                <Home displayName = {displayName} signout = {signout} />
            :
                <LoginPage handleLogin={handleLogin} handleSignup={handleSignup} />
            }
        </>
    )
}

export default LandingPage;

//research plaid