import React from 'react'
import Image from 'next/image'

import StarRatings from 'react-star-ratings'

import { GlobeIcon } from '@heroicons/react/outline'

interface Props {
  tour: {
    id: number
    image: string
    address: {
      street: string
      city: string
      zipCode: string
      county: string
      country: string
    }
    tourName: string
    rating: number
    ratingCount: number
    price: number
  }
}

const Tour = ({ tour }: Props) => {
  return (
    <div className="relative m-4 ml-[12.5rem] flex h-[35vh] w-[70vw] flex-col md:-ml-20 md:w-[35vw] lg:w-[30vw] xl:m-0 xl:w-[14rem]">
      <div className="relative h-[25vh] w-[70vw] md:w-[35vw] lg:w-[25vw] xl:w-[14rem]">
        <Image
          src={tour.image}
          alt="hero3"
          layout="fill"
          objectFit="cover"
          objectPosition=""
          className="rounded-2xl"
        />
      </div>

      <p className="m-2 flex items-center truncate text-gray-500">
        <GlobeIcon className="mr-3 h-4" />
        {tour.address.city}, {tour.address.country}
      </p>

      <h5 className="mb-1 truncate text-lg font-semibold capitalize">
        {tour.tourName}
      </h5>

      <div className="m-1 flex items-center">
        <StarRatings
          rating={tour.rating}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="#FDCC0D"
        />
        <p className="ml-2 text-sm text-gray-500">{tour.ratingCount}</p>
      </div>

      <p className="my-2">
        From <span className="text-lg font-semibold">${tour.price}</span>
      </p>
    </div>
  )
}

export default Tour
