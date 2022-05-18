import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CashIcon, EmojiHappyIcon, ClipboardListIcon, AcademicCapIcon } from '@heroicons/react/outline'

import hero1 from '../public/hero/hero-1.jpg'
import hero2 from '../public/hero/hero-2.jpg'
import hero3 from '../public/hero/hero-3.jpg'

const AboutUsSection = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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
        <h1 className='flex justify-center my-1 text-xl font-bold font-sans mb-8'>Why book with us?</h1>


        <Carousel
            className=''
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
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass=""
        >
            <div className='w-screen h-[30vh] md:h-[20vh] flex items-center flex-col'>
                <CashIcon className='h-8 text-green-600'/>
                <h2 className='mt-4 text-lg font-semibold font-sans'>Ultimate flexibility</h2>
                <p className='w-[76vw] mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam corrupti nihil eligendi quasi officiis.</p>
       
            </div>
            {/* <div className='w-screen h-[30vh] flex items-center flex-col'>
                <EmojiHappyIcon className='h-8 text-emerald-700'/>
                <h2 className='mt-4 text-lg font-semibold font-sans'>Memorable experiences</h2>
                <p className='w-[76vw] mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam corrupti nihil eligendi quasi officiis dafda.</p>
       
            </div>

            <div className='w-screen h-[30vh] flex items-center flex-col'>
                <ClipboardListIcon className='h-8 text-violet-400'/>
                <h2 className='mt-4 text-lg font-semibold font-sans'>Quality at our core</h2>
                <p className='w-[76vw] mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam i officiis.</p>
       
            </div>

            <div className='w-screen h-[30vh] flex items-center flex-col'>
                <AcademicCapIcon className='h-8 text-violet-600'/>
                <h2 className='mt-4 text-lg font-semibold font-sans'>Award-winning support</h2>
                <p className='w-[76vw] mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi </p>
       
            </div> */}

        </Carousel>

    </div>
  )
}

export default AboutUsSection