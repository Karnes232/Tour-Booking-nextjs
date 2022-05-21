import React from 'react'
import AppStore from './AppStore'
import Copyright from './Copyright'
import Sitemap from './Sitemap'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className='shadow-sm border-b bg-gray-800 mt-8'>
        <div className='flex flex-col justify-between max-w-6xl mx-5 xl:mx-auto'>
            <SocialMedia/>
            <Sitemap />
            <div className='flex flex-col justify-between md:flex-row'>
              <AppStore />
              <Copyright/>
            </div> 
            
        </div>
    </div>
  )
}

export default Footer