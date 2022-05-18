import React from 'react'
import { HomeIcon, LogoutIcon, LoginIcon, MenuIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'

const Buttons = () => {
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <div className="flex justify-end items-center space-x-4">
            {session ? (
                <div className='hidden md:inline-flex'>
                    <Image 
                        src={session?.user?.image!} 
                        width={40}
                        height={40}
                        objectFit='contain'
                        className='rounded-full cursor-pointer'
                        onClick={(event: React.MouseEvent<HTMLElement>) => {signOut()}}
                    />
                </div>
                 
            ): (<></>)}

            <HomeIcon onClick={() => router.push('/')} className='hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out'/>
            <HamburgerMenu />
            {session ? (
                <>
                
               
                <div className='p-1 border-gray-700 rounded-xl border-2 cursor-pointer hover:scale-105 transition-all duration-150 ease-out hidden md:inline-flex'>
                    <LogoutIcon onClick={() => signOut()} className='h-6 md:inline-flex '/>
                </div>
                
                </>
                
                
                
            ):(
                
                <button 
                    className='hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out'
                    onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
                >
                    Sign In
                </button> 
            )}

            
        </div>
    )
}

export default Buttons