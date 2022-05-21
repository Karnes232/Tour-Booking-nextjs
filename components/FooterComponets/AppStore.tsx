import Image from 'next/image'
import React from 'react'

const AppStore = () => {
  return (
    <div className='flex py-4 justify-between mx-8 md:justify-center md:space-x-4'>
        <div className='relative h-10 w-32'>
            <Image 
                src="/footer/google-play.svg"
                layout="fill"
                objectFit='cover'
            />
        </div>
       <div className='relative h-10 w-32'>
        <Image 
            src="/footer/app-store-apple.svg"
            layout="fill"
            objectFit='cover'
        />
       </div>
        
    </div>
  )
}

export default AppStore