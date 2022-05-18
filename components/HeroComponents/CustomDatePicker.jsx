import React from 'react'
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
    DatePicker,
  } from '@material-ui/pickers';

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
    
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    );
  }

export default CustomDatePicker