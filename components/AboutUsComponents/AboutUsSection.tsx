import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CashIcon, EmojiHappyIcon, ClipboardListIcon, AcademicCapIcon } from '@heroicons/react/outline'

const AboutUsSection = () => {
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
    <div className='flex flex-col mt-10 max-w-6xl mx-auto'>
        <h1 className='flex justify-center my-1 text-xl font-bold font-sans mb-8 lg:text-3xl xl:text-5xl'>Why book with us?</h1>


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
            customTransition=""
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass=""
        >
            <div className='aboutDiv'>
                <CashIcon className='!h-8 text-green-600'/>
                <h2 className='aboutH2'>Ultimate flexibility</h2>
                <p className='aboutParagraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam corrupti nihil eligendi quasi officiis.</p>
       
            </div>
            <div className='aboutDiv'>
                <EmojiHappyIcon className='h-8 text-emerald-700'/>
                <h2 className='aboutH2'>Memorable experiences</h2>
                <p className='aboutParagraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam corrupti nihil eligendi quasi officiis dafda.</p>
       
            </div>

            <div className='aboutDiv'>
                <ClipboardListIcon className='h-8 text-violet-400'/>
                <h2 className='aboutH2'>Quality at our core</h2>
                <p className='aboutParagraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi vero accusantium laboriosam i officiis.</p>
       
            </div>

            <div className='aboutDiv'>
                <AcademicCapIcon className='h-8 text-violet-600'/>
                <h2 className='aboutH2'>Award-winning support</h2>
                <p className='aboutParagraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maiores, fugit molestiae laborum quae id commodi </p>
       
            </div>

        </Carousel>

    </div>
  )
}

export default AboutUsSection