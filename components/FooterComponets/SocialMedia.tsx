import { useRouter } from 'next/router';
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
    const router = useRouter()
    return (
        <div className='border-b border-gray-500'>
            <div className='flex py-4 justify-between mx-8'>
                <Link href="https://www.facebook.com/">
                    <a>
                        <FaFacebookF 
                            className='footerIcons'
                        />
                    </a>
                </Link>
                <FaTwitter 
                    className='footerIcons'
                    onClick={() => router.push('https://twitter.com/')}
                />
                <FaPinterestP 
                    className='footerIcons'
                    onClick={() => router.push('https://www.pinterest.com/')}
                />
                <FaInstagram 
                    className='footerIcons'
                    onClick={() => router.push('https://instagram.com/')}
                />
                <FaYoutube 
                    className='footerIcons'
                    onClick={() => router.push('https://youtube.com/')}
                />
                <FaTiktok 
                    className='footerIcons'
                    onClick={() => router.push('https://www.tiktok.com/')}
                />
            </div>
        </div>
    )
}

export default SocialMedia