import React from 'react'
import Buttons from './Buttons'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto'>
            <Logo/>

            <Buttons />
        </div>
    </div>
  )
}

export default Header