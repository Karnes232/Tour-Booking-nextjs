import React from 'react'
import AppStore from './AppStore'
import Copyright from './Copyright'
import Sitemap from './Sitemap'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className="mt-8 border-b bg-gray-800 shadow-sm">
      <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia />
        <Sitemap />
        <div className="flex flex-col justify-between md:flex-row">
          <AppStore />
          <Copyright />
        </div>
      </div>
    </div>
  )
}

export default Footer
