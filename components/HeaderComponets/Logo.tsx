import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')} className='relative lg:inline-grid w-24 h-24 cursor-pointer'>
            <Image src='/logo-travel-y-tour.png' 
                layout='fill'
                objectFit='contain'
                priority
            />
        </div>
    )
}

export default Logo