import React from 'react'
import Image from 'next/image'

import StarRatings from 'react-star-ratings';

import { GlobeIcon } from '@heroicons/react/outline'

interface Props {
    tour:{
        id: number;
    image: string;
    address: {
        street: string
        city: string
        zipCode: string
        county: string
        country: string
    };
    tourName: string;
    rating: number;
    ratingCount: number;
    price: number;
    }
    
}

const Tour = ({tour}: Props) => {
  return (
    <div className='w-[70vw] md:w-[35vw] lg:w-[30vw] xl:w-[14rem] h-[35vh] flex flex-col relative m-4 ml-[12.5rem] md:-ml-20 xl:m-0'>
              <div className='w-[70vw] md:w-[35vw] lg:w-[25vw] xl:w-[14rem] h-[25vh] relative'>
                <Image src={tour.image} alt='hero3'
                  layout='fill'
                  objectFit='cover'
                  objectPosition=''
                  className='rounded-2xl'
                />
              </div>
                
                <p className='m-2 text-gray-500 flex items-center truncate'>
                  <GlobeIcon className='h-4 mr-3'/>
                  {tour.address.city}, {tour.address.country}
                </p>

                <h5 className='font-semibold text-lg capitalize truncate mb-1'>{tour.tourName}</h5>

                <div className='m-1 flex items-center'>
                  <StarRatings
                    rating={tour.rating}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="#FDCC0D"
                  />
                  <p className='ml-2 text-gray-500 text-sm'>{tour.ratingCount}</p>
                </div>
                
                <p className='my-2'>From <span className='text-lg font-semibold'>${tour.price}</span></p>

            </div>
  )
}

export default Tour