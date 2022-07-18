import React from 'react'
import {
  HomeIcon,
  LogoutIcon,
  LoginIcon,
  MenuIcon,
  PlusIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import HamburgerMenu from './HamburgerMenu'

const Buttons = () => {
  const router = useRouter()
  const { data: session } = useSession()
  return (
    <div className="flex items-center justify-end space-x-3">
      {session ? (
        <div className="hidden items-center justify-center space-x-3 md:inline-flex">
          <Image
            src={session?.user?.image!}
            width={40}
            height={40}
            objectFit="contain"
            className="cursor-pointer rounded-full"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              signOut()
            }}
          />
          <PlusIcon
            className="h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125"
            onClick={() => router.push('/create')}
          />
        </div>
      ) : (
        <></>
      )}

      <HomeIcon
        onClick={() => router.push('/')}
        className="hidden h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125 md:inline-flex"
      />
      <HamburgerMenu />
      {session ? (
        <>
          <div className="hidden cursor-pointer rounded-xl border-2 border-gray-700 p-1 transition-all duration-150 ease-out hover:scale-105 md:inline-flex">
            <LogoutIcon
              onClick={() => signOut()}
              className="h-6 md:inline-flex "
            />
          </div>
        </>
      ) : (
        <button
          className="hidden h-6 cursor-pointer transition-all duration-150 ease-out hover:scale-125 md:inline-flex"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            signIn()
          }}
        >
          Sign In
        </button>
      )}
    </div>
  )
}

export default Buttons
