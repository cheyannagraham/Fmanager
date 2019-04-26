import React, {useEffect} from 'react';
import { Email, Password} from '../Credentials/LoginSignupComponents';
import Button from '@material-ui/core/Button';

//remove event listeners
//define error conditions for the form

const LoginForm = props => {
    const variant = 'outlined';

    useEffect(() => {
        const form = document.querySelector('#login');
        form.addEventListener('submit', handleSubmit);
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        const [email,pwd] = props.getCreds();
        props.auth.signInWithEmailAndPassword(email,pwd)
            .catch(err => props.setShowModal({
                show: true,
                type:'error',
                status:'error',
                content:
                <>
                    <p><b>{err.code}</b></p>
                    <p>{err.message}</p>
                    <Button onClick={() => props.setShowModal(false)}>Close</Button>
                </>
            }))
        props.setShowModal(false);
    }  
    
    return (
        <form id = 'login'>
            <Email variant = {variant} />
            <Password variant = {variant} />
            <Button type = 'submit'> Login </Button>
            <Button onClick={() => props.setShowModal(false)}>Close</Button>
        </form>
        )
}

export default LoginForm;