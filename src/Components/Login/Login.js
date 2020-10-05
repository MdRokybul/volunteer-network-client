import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function (error) {

        });
    }
    return (
        <Container style={{ marginTop: '100px' }}>
            <div className="d-flex justify-content-center">
                <div className="login-container d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h4>Login with</h4>
                        <div onClick={handleLogin} className="google-style d-flex">
                            <img src="https://firebasestorage.googleapis.com/v0/b/volunteer-network-d8e29.appspot.com/o/google-logo-9824.png?alt=media&token=b739b85c-30f2-414e-b523-fb81e73fd37b" alt="" />
                            <p>  Google </p>
                        </div>

                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Login;