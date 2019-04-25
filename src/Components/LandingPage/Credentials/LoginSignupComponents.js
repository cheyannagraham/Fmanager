import React from 'react';
import TextField from '@material-ui/core/TextField'

export const Email = props => {
    return (
//Placeholders arent showing bc labels are. Perhaps style diff to show placeholders
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
            required
            variant = {props.variant} />
    );
}
