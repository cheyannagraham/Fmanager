import React, { useState, useContext } from 'react';
import { CloseModalButton } from '../Modal/Modal';
import { ModalContext } from '../../App';
import { auth } from '../../fb/fb';
import LoginPage from '../LoginPage/LoginPage';
import LoginForm from '../LoginPage/LoginForm';
import SignupForm from '../Signup/SignupForm';
import Home from '../Home/Home';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/Footer';
import { withStyles} from '@material-ui/core/styles';
import styles from './styles.landingpage'



const LandingPage = (props) => {
    const { classes } = props;

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
            <Grid container className = {classes['lp-content']}>
                

                {user ?
                    <Home displayName={displayName} signout={signout} />
                    :
                    <LoginPage handleLogin={handleLogin} handleSignup={handleSignup} />
                }
            </Grid>

            <Footer />
        </>
    )
}

export default withStyles(styles)(LandingPage);

//research plaid
//autoselect when close when success message shows
//autofocus modal buttons
//color balances red/green
//add calculator app
//add notes filed in trans form
//maybe change select to radio
//add account options => delete, change info
//add a timestamp for adding/updating
//add autocomplete filled with previous entries
//add max view and scroll transactions