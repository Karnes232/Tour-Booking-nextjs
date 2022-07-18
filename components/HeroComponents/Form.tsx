import { SearchIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import DatePicker from './CustomDatePicker'
import SearchBar from './SearchBar'
import moment from 'moment'

const Form = () => {
  const [selectedDate, handleDateChange] = useState(new Date())
  const date = moment(selectedDate).format('MMMM Do YYYY')
  return (
    <form className="xl: mx-5 flex h-48 w-80 max-w-6xl flex-col rounded-lg bg-white p-5 opacity-75">
      <h1 className="p-1 font-sans text-lg font-semibold">
        Find your greatest experience
      </h1>

      <SearchBar />
      <div className="mt-2 flex justify-between">
        <div className="max-w-xs">
          <DatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </div>
        <input
          type="submit"
          className="focus:shadow-outline ml-2 w-28 cursor-pointer rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-400 focus:outline-none"
        />
      </div>
    </form>
  )
}

export default Form
