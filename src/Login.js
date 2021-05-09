import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';
const Login = (props) => {
    const [{}, dispatch] = useStateValue();

    const signIn = (props) => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            
        })
        .catch((error) => alert(error.message));

    }

    return (
        <div className="login">
        <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt ="whatsapp" />
        <div className = "login__text">
        <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
        </div>

            </div>
    );
}

export default Login;