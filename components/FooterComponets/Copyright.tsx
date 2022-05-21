import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
    <div className='flex flex-col py-4 justify-between mx-8 md:flex-row md:items-center md:space-x-2'>
        <Link href='/'>
            <p className='footerSitemap'>&copy; 2022 Travel &#38; Tour</p>
        </Link>
        <Link href='/'>
            <p className='footerSitemap'>Terms &#38; Conditions</p>
        </Link>
    </div>
  )
}

export default Copyright