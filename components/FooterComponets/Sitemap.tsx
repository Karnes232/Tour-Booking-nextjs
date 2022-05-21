import Link from 'next/link'
import React from 'react'

const Sitemap = () => {
  return (
    <div className='border-b border-gray-500'>
        <div className='flex flex-col py-4 justify-between mx-8 md:flex-row md:max-w-2xl md:mx-auto'>
            <Link href='/'>
                <p className='footerSitemap'>Help Center</p>
            </Link>
            <Link href='/'>
                <p className='footerSitemap'>Careers</p>
            </Link>
            <Link href='/'>
                <p className='footerSitemap'>Privacy and Cookies Statement</p>
            </Link>
            <Link href='/'>
                <p className='footerSitemap'>About Us</p>
            </Link>
            <Link href='/'>
                <p className='footerSitemap'>Supplier Sign Up</p>
            </Link>
        </div>
    </div>
  )
}

export default Sitemap