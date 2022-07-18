import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import hero1 from '../../public/hero/hero-1.jpg'
import hero2 from '../../public/hero/hero-2.jpg'
import hero3 from '../../public/hero/hero-3.jpg'
import Form from './Form'

const Hero = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <Carousel
      className=""
      swipeable={true}
      draggable={true}
      showDots={true}
      arrows={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 1500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass=""
      shouldResetAutoplay={false}
    >
      <div className="flex h-[65vh] w-screen items-center justify-center md:h-[40vh] lg:-mx-[20rem] lg:h-[25vw] xl:-mx-[26rem]">
        <div>
          <Image
            src={hero1}
            alt="hero1"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 80%"
            className="opacity-75 grayscale-[10%]"
            priority
          />
        </div>

        <Form />
      </div>
      <div className="flex h-[65vh] w-screen items-center justify-center md:h-[40vh] md:justify-between lg:h-[25vw] xl:-mx-[26rem] xl:justify-center">
        <Image
          src={hero2}
          alt="hero2"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 40%"
          className="opacity-75 grayscale-[10%]"
        />
        <Form />
      </div>
      <div className="flex h-[65vh] w-screen items-center justify-center md:h-[40vh] md:justify-between lg:h-[25vw] xl:-mx-[26rem] xl:justify-center">
        <Image
          src={hero3}
          alt="hero3"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 45%"
          className="opacity-75 grayscale-[10%]"
        />
        <Form />
      </div>
    </Carousel>
  )
}

export default Hero
