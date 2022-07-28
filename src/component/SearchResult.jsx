import { Button } from '@mui/material';
import React, { useState } from 'react';
import './SearchResult.css';
import Modal from 'react-modal';
import Seatbooking from './Seatbooking';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toPayment } from '../features/userSlice';

function SearchResult(props) {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }

    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/payment";
        navigate(path);
    }

    const dispatch = useDispatch();

    const handleSubmit = (...params) => {
        dispatch(toPayment({
            product: params[0],
            price: params[1]
        }))
        routeChange();
    }

    return (
        <>
            <div className='searchResult' key={props.id}>
                <img src={props.img} alt="" />
                <div className='searchResult__info'>
                    <div className='searchResult__infoTop'>
                        <h3>{props.from} to {props.to}</h3>
                        <hr />
                        <p>{props.description}</p>
                    </div>
                    <div className='searchResult__infoBottom'>
                        <div className='searchResult__price'>
                            <h2>₱{props.price}</h2>
                            <Button onClick={openModal}>Book Seats</Button>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <Modal isOpen={modal} onRequestClose={closeModal} contentLabel="Bus description">
                    <button className='modal__close' onClick={closeModal}>x</button>
                    <div className='modal__details'>
                        <img className='modal__img' src={props.img} alt="" />
                        <div className='modal__description'>
                            <p className='modal__title'>{props.from} to {props.to}</p>
                            <p>{props.description}</p>

                            <Seatbooking />
                            <div className='modal__price'>
                                <div>₱{props.price}</div>
                                <Button onClick={() => handleSubmit(`${props.from} to ${props.to}`, props.price)}>Book now</Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default SearchResult;