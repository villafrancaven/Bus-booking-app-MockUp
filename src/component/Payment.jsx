import { Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct, selectUser } from '../features/userSlice';
import PaymentForm from './Payment-form';
import "./Payment.css";
import { useNavigate } from 'react-router-dom';

function Payment() {
    const product = useSelector(selectProduct)
    const user = useSelector(selectUser)

    const navigate = useNavigate()
    const changeRoute = () => {
        navigate("/login")
    }

    return (
        <div className='payment'>
            {user === null || product === null 
            ? 
            <div className='payment__denied__container'>
                <p className='payment__denied'>Cannot process transaction. Incomplete details. Please login first</p>
                <Button variant='outlined' className='payment__denied__button' onClick={changeRoute}>Login</Button>
            </div>
            : 
            <>
                <PaymentForm 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    address={user.address}
                    price={product.price}
                    product={product.product}
                />
            </>}
        </div>
    );
}

export default Payment;