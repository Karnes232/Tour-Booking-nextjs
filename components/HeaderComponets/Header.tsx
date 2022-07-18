import React from 'react'
import Buttons from './Buttons'
import Logo from './Logo'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between bg-white xl:mx-auto">
        <Logo />

        <Buttons />
      </div>
    </div>
  )
}

export default Header
