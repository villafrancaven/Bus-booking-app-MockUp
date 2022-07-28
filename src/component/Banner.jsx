import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import DatePicker from './DatePicker';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    const routeToPromo = () => {
        const path = '/promos';
        navigate(path);
    }

    const routeToSearch = () => {
        const path = '/search';
        navigate(path);
    }

    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button variant='outlined' className='banner__searchButton' onClick={routeToSearch}>
                    Search Busses
                </Button>
                {/* <Button variant='outlined' className='banner__searchButton' onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <DatePicker />} */}
            </div>
            <div className='banner__info'>
                <h1>Get out and travel comfortably</h1>
                <h5>Plan a different kind of travel in the comfort of your home.</h5>
                <Button variant="outlined" onClick={routeToPromo}>See Promos</Button>
            </div>
        </div>
    );
}

export default Banner;