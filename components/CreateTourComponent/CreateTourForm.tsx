import React, { useState } from 'react'

const CreateTourForm = () => {
  const [tourName, setTourName] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="mx-auto mt-5 grid max-w-6xl grid-cols-2 gap-6">
      <div></div>
      <div className="space-y-3">
        <label htmlFor="tourName" className="block">
          <span className="ml-2 text-gray-700">Tour Name</span>
          <input
            type="text"
            id="tourName"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            className="form-input
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Tour Name"
          />
        </label>
        <label className="block" htmlFor="city">
          <span className="ml-2 text-gray-700">City</span>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-input
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Punta Cana"
          />
        </label>
        <label className="block" htmlFor="country">
          <span className="ml-2 text-gray-700">Country</span>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-input
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            placeholder="Dominican Republic"
          />
        </label>
        <div className="grid grid-cols-2 gap-6">
          <label className="block" htmlFor="price">
            <span className="ml-2 text-gray-700">Price</span>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="$59.99"
            />
          </label>
          <label className="block" htmlFor="photo">
            <span className="ml-2 text-gray-700">Photo</span>
            <span
              className="form-input mt-1 block cursor-pointer rounded-md
                    border-transparent bg-gray-100 py-2 px-3
                    text-gray-700
                    focus:border-gray-500 focus:bg-white focus:ring-0 "
            >
              Choose Photo
            </span>
            <input
              type="file"
              id="photo"
              className="hidden"
            />
          </label>
        </div>
        <label className="block" htmlFor="description">
          <span className="ml-2 text-gray-700">Description</span>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </label>
      </div>
    </div>
  )
}

export default CreateTourForm
