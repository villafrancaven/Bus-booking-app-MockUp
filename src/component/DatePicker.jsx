import React, { useState } from 'react';
import './DatePicker.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from '@mui/material'

function DatePicker(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
            <div className='datePicker'>
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
                <h2>Destination</h2>
                <input className='from' type="text" placeholder='From' value={props.fromFilter} onChange={(e) => props.setFromFilter(e.target.value)}/>
                <input className='to' type="text" placeholder='To' value={props.toFilter} onChange={(e) => props.setToFilter(e.target.value)}/>
                <Button onClick={() => props.setHideSearch(!props.hideSearch)}>Search Busses</Button>
            </div>
    );
}

export default DatePicker;