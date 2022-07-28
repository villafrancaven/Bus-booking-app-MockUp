import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../features/userSlice';
import { Button } from '@mui/material'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignup] = useState(false)

    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/signup";
        navigate(path);
    }
    const routeToHome = () => {
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === email && user.password === password) {
            dispatch(login({
                loggedIn: true
            }))
            setIsSignup(true)
            routeToHome()
        }
    }

    return (
        <>
            <div className='login-container'>
                <form>
                        <div className="top"></div>
                        <div className="bottom"></div>
                        <div className="center">
                            <h2>Login Here</h2>
                            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Button className="login__button" onClick={(e) => handleSubmit(e)}>Login</Button>
                        </div>
                </form>
            </div>
            {!isSignUp &&
                <div className='signup__prompt'>
                    <Button className="login__button" onClick={routeChange}>Sign up</Button>
                </div>
            }
        </>
    );
}

export default Login;