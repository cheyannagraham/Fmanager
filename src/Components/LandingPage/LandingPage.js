import React, { useState, useContext } from 'react';
import { CloseModalButton } from '../Modal/Modal';
import { ModalContext } from '../../App';
import { auth } from '../../fb/fb';
import LoginPage from './LoginPage/LoginPage';
import LoginForm from './LoginPage/LoginForm';
import SignupForm from './Signup/SignupForm';
import Home from './Signup/Home';



const LandingPage = (props) => {

    const [user, setUser] = useState(null);
    const showModal = useContext(ModalContext).setShowModal;
    const [displayName, setDisplayName] = useState(user && user.displayName);

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
        setShowModal: showModal
    }

    const handleLogin = () => {
        showModal({
            show: true,
            type: 'login',
            'title': 'Login To Your Account',
            content: <LoginForm {...prop} />
        });
    }

    const handleSignup = () => {
        showModal({
            show: true,
            type: 'signup',
            title: 'Create An Account',
            content: <SignupForm {...Object.assign({}, prop, { setDisplayName: setDisplayName })} />
        })
    }

    const signout = () => {
        auth.signOut()
            .catch(err => showModal({
                show: true,
                type: 'error',
                title: 'Error Signing Out!',
                text: err,
                actions: <CloseModalButton />
            })
        );
    }

    return (
        <>

            {user ?
                <Home displayName={displayName} signout={signout} />
                :
                <LoginPage handleLogin={handleLogin} handleSignup={handleSignup} />
            }
        </>
    )
}

export default LandingPage;

//research plaid