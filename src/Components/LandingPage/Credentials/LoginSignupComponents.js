import React from 'react';
import TextField from '@material-ui/core/TextField'

export const Email = props => {
    return (
        <TextField 
            label = 'email'
            id='email'
            name='email'
            type='email'
            placeholder='user@fmanager.com'
            required
            variant = {props.variant} />
    );
}
export const Password = props => {
    return (
        <TextField 
            label='password'
            id='pwd'
            name='pwd'
            type='password'
            required 
            variant = {props.variant}/>
    );
}
export const Username = props => {
    return (
        <TextField
            label='Username'
            name='Username'
            type='text'
            id='username'
            placeholder ='GrayG123'
            required
            variant = {props.variant} />
    );
}
