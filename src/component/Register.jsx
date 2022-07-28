import React from 'react';
import './Register.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signUp } from '../features/userSlice';
import { Button } from '@mui/material';

function Registration() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
    });

    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    }

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            address: user.address,
        }))
        dispatch(login({
            loggedIn: false
        }))
        routeChange();
    }

    return (
        <div className='signup__form'>
            <h2>Register</h2>
            <form>
                <div className='form-group'>
                    <input placeholder='First Name' type="text" name='firstName' value={user.firstName} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input placeholder='Last Name' type="text" name='lastName' value={user.lastName} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input placeholder='Email Address' type="email" name='email' value={user.email} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input placeholder='Billing Address' type="text" name='address' value={user.address} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input placeholder='Password' type="password" name='password' value={user.password} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                <Button className='signup__button' onClick={handleSubmit}>Sign up</Button>
                </div>
            </form>
        </div>
    );
}

export default Registration;