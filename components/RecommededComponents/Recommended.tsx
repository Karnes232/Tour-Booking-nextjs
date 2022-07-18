import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import {
  randNumber,
  randAddress,
  randCompanyName,
  randFloat,
} from '@ngneat/falso'
import { faker } from '@faker-js/faker'
import Tour from './Tour'

interface tour {
  id: number
  image: string
  address: any
  tourName: string
  rating: number
  ratingCount: number
  price: number
}

const Recommended = () => {
  const [tours, setTours] = useState<tour | any>([])

  useEffect(() => {
    const tourHolder: any = []
    for (let index = 0; index < 15; index++) {
      const tour: tour = {
        id: randNumber(),
        image: faker.image.nature(500, 400, true),
        address: randAddress(),
        tourName: randCompanyName(),
        rating: randFloat({ min: 1, max: 5, fraction: 2 }),
        ratingCount: randFloat({ min: 1, max: 200, fraction: 0 }),
        price: randFloat({ min: 1, max: 300, fraction: 2 }),
      }
      tourHolder.push(tour)
    }
    return setTours(tourHolder)
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tabletLandscape: {
      breakpoint: { max: 1280, min: 821 },
      items: 3.3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 821, min: 464 },
      items: 2.3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <div className="mx-auto mt-10 flex max-w-6xl flex-col">
      <h1 className="my-1 mb-8 flex justify-center font-sans text-xl font-bold lg:text-3xl xl:text-5xl">
        Recommended for you!
      </h1>

      <Carousel
        className=""
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'tabletLandscape']}
        dotListClass="custom-dot-list-style"
        itemClass=""
      >
        {tours.map((tour: tour) => (
          <Tour tour={tour} />
        ))}
      </Carousel>
    </div>
  )
}

export default Recommended
