import Link from 'next/link'
import React from 'react'

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="mx-8 flex flex-col justify-between py-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link href="/">
          <p className="footerSitemap">Help Center</p>
        </Link>
        <Link href="/">
          <p className="footerSitemap">Careers</p>
        </Link>
        <Link href="/">
          <p className="footerSitemap">Privacy and Cookies Statement</p>
        </Link>
        <Link href="/">
          <p className="footerSitemap">About Us</p>
        </Link>
        <Link href="/">
          <p className="footerSitemap">Supplier Sign Up</p>
        </Link>
      </div>
    </div>
  )
}

export default Sitemap
