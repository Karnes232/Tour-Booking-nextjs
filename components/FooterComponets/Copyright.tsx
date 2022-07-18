import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
    <div className="mx-8 flex flex-col justify-between py-4 md:flex-row md:items-center md:space-x-2">
      <Link href="/">
        <p className="footerSitemap">
          &copy; {new Date().getFullYear()} Travel &#38; Tour
        </p>
      </Link>
      <Link href="/">
        <p className="footerSitemap">Terms &#38; Conditions</p>
      </Link>
    </div>
  )
}

export default Copyright
