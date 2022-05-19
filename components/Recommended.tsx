import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Recommended = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tabletLandscape: {
          breakpoint: { max: 1024, min: 821 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 821, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='flex flex-col mt-10'>
        <h1 className='flex justify-center my-1 text-xl font-bold font-sans mb-8 lg:text-3xl xl:text-5xl'>Recommended for you!</h1>
    </div>
  )
}

export default Recommended