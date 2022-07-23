import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import handleSubmit from './handleSubmit'

const CreateTourForm = () => {
  const [tourName, setTourName] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<File | null>(null)
  const { data: session } = useSession()

  function isFileImage(file: any) {
    return file && file['type'].split('/')[0] === 'image'
  }

  return (
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
            min="0.00"
            max="10000.00"
            step="0.01"
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
          {image ? (
            <span
              className="form-input mt-1 block cursor-pointer rounded-md
                    border-transparent bg-gray-100 py-2 px-3
                    text-gray-700
                    focus:border-gray-500 focus:bg-white focus:ring-0 "
            >
              {image.name}
            </span>
          ) : (
            <span
              className="form-input mt-1 block cursor-pointer rounded-md
                    border-transparent bg-gray-100 py-2 px-3
                    text-gray-700
                    focus:border-gray-500 focus:bg-white focus:ring-0 "
            >
              Choose Photo
            </span>
          )}

          <input
            type="file"
            id="photo"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = isFileImage(e.target.files![0])
              if (file) {
                setImage(e.target.files![0])
              }
            }}
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

      <button
        type="button"
        className="focus:shadow-outline w-full cursor-pointer rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-400 focus:outline-none md:w-1/2"
        onClick={() => {
          handleSubmit(
            tourName,
            city,
            country,
            price,
            description,
            image,
            session
          )
          setTourName('')
          setCity('')
          setCountry('')
          setPrice('')
          setDescription('')
          setImage(null)
        }}
      >
        Submit Tour
      </button>
    </div>
  )
}

export default CreateTourForm
