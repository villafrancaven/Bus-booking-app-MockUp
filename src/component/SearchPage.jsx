import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { Button } from '@mui/material'
import DatePicker from './DatePicker';
import axios from "axios";

function SearchPage() {
    const [showSearch, setShowSearch] = useState(false);
    const [backendData, setBackEndData] = useState("");

    const [fromFilter, setFromFilter] = useState("");
    const [toFilter, setToFilter] = useState("");

    useEffect(() => {
        const fetchBusses = async () => {
            const res = await axios.get(`http://localhost:3500/busses?q=${fromFilter}`);
            setBackEndData({
                data: res.data
            });
        };
        if (fromFilter.length === 0 || fromFilter.length > 2 ) {
            fetchBusses();
        }
    }, [fromFilter])

    return (
        <div className='searchPage'>
            <div className='banner__2'>
                <div className='banner__search'>
                    <Button variant='outlined' className='banner__searchButton' onClick={() => setShowSearch(!showSearch)}>
                        {showSearch ? "Hide" : "Search Dates"}
                    </Button>
                    {showSearch && 
                    <DatePicker 
                        fromFilter={fromFilter}
                        toFilter={toFilter}
                        setFromFilter={setFromFilter}
                        setToFilter={setToFilter}
                        hideSearch={showSearch}
                        setHideSearch={setShowSearch}
                    />}
                </div>
            </div>
            <div className='searchPage__info'>
                <h1>Bus Routes</h1>
            </div>
            {(typeof backendData.data === 'undefined') ? (
                <p>Loading...</p>
            ):(
                backendData.data.map((bus) => (
                    <SearchResult
                        key={bus.id} 
                        img={bus.img}
                        from={bus.from}
                        to={bus.to}
                        description={bus.description}
                        price={bus.price}
                    />
                ))
            )}
        </div>
    );
}

export default SearchPage;