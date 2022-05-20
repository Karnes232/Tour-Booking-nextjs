import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import hero1 from '../public/hero/hero-1.jpg'
import hero2 from '../public/hero/hero-2.jpg'
import hero3 from '../public/hero/hero-3.jpg'
import Form from './HeroComponents/Form';

const Hero = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
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
            <div className='w-screen h-[65vh] md:h-[40vh] lg:h-[25vw] flex justify-center items-center md:justify-between xl:justify-center xl:-mx-[26rem]'>
                <div>
                    <Image src={hero1} alt='hero1'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 80%'
                        className='opacity-75 grayscale-[10%]'
                        priority
                    />
                </div>
                
             
                    <Form />
                    
                
                
            </div>
            <div className='w-screen h-[65vh] md:h-[40vh] lg:h-[25vw] flex justify-center items-center md:justify-between xl:justify-center xl:-mx-[26rem]'>
                <Image src={hero2} alt='hero2'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='50% 40%'
                    className='opacity-75 grayscale-[10%]'
                />
                <Form/>
            </div>
            <div className='w-screen h-[65vh] md:h-[40vh] lg:h-[25vw] flex justify-center items-center md:justify-between xl:justify-center xl:-mx-[26rem]'>
                <Image src={hero3} alt='hero3'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='50% 45%'
                    className='opacity-75 grayscale-[10%]'
                />
                <Form/>
            </div> 
        </Carousel>
    )
}

export default Hero