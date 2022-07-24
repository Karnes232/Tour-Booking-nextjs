import Image from 'next/image'
import React from 'react'
import hero1 from '../../public/hero/hero-1.jpg'

const FindMoreTours = () => {
  return (
    <div className="relative order-last m-auto h-72 w-full rounded-lg md:order-first md:h-5/6 md:w-11/12">
      <Image
        src={hero1}
        alt="hero1"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 80%"
        className="rounded-lg opacity-75 brightness-50"
        priority
      />
      <h1 className="absolute top-16 left-5 text-2xl font-semibold tracking-wider text-white md:top-28">
        Get More to Travel More
      </h1>
      <p className="absolute top-28 left-5 w-9/12 text-sm text-white md:top-40">
        Members can get double rewards. Sign up for free and start getting
        points on top of airline miles.{' '}
      </p>
      <button
        type="button"
        className="focus:shadow-outline absolute top-48 left-5 cursor-pointer rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-400 focus:outline-none md:top-60"
        onClick={() => {
          console.log('clicked')
        }}
      >
        Find Out More
      </button>
    </div>
  )
}

export default FindMoreTours
