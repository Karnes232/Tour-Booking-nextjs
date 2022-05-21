import React from 'react'
import SocialMedia from './FooterComponets/SocialMedia'

const Footer = () => {
  return (
    <div className='shadow-sm border-b bg-gray-800 mt-8'>
        <div className='flex flex-col justify-between h-20 max-w-6xl mx-5 xl:mx-auto'>
            <SocialMedia/>
        </div>
    </div>
  )
}

export default Footer