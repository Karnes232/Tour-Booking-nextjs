import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/')}
      className="relative h-24 w-24 cursor-pointer lg:inline-grid"
    >
      <Image
        src="/logo-travel-y-tour.png"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}

export default Logo
