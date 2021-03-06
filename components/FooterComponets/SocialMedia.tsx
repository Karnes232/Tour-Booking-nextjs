import React from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="mx-8 flex justify-between py-4 md:mx-auto md:max-w-md">
        <Link href="https://www.facebook.com/">
          <a>
            <FaFacebookF className="footerIcons" />
          </a>
        </Link>
        <Link href="https://twitter.com/">
          <a>
            <FaTwitter className="footerIcons" />
          </a>
        </Link>
        <Link href="https://www.pinterest.com/">
          <a>
            <FaPinterestP className="footerIcons" />
          </a>
        </Link>
        <Link href="https://instagram.com/">
          <a>
            <FaInstagram className="footerIcons" />
          </a>
        </Link>
        <Link href="https://youtube.com/">
          <a>
            <FaYoutube className="footerIcons" />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/">
          <a>
            <FaTiktok className="footerIcons" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia
