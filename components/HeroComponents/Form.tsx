import { SearchIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import DatePicker from './CustomDatePicker'
import SearchBar from './SearchBar'
import moment from 'moment';


const Form = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const date = moment(selectedDate).format('MMMM Do YYYY')
    return (

        
        <form className='bg-white rounded-lg w-80 h-48 opacity-75 p-5 flex flex-col mx-5 max-w-6xl xl:'>
            <h1 className='font-sans p-1 font-semibold text-lg'>Find your greatest experience</h1>

            <SearchBar />
            <div className='flex justify-between mt-2'>
                <div className="max-w-xs">
                    <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
                </div>
                <input type="submit" className='ml-2 bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-28' />
            </div>
            
            
        </form>
       
  )
}

export default Form