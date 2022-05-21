import { signIn } from 'next-auth/react'
import React from 'react'

const SignIn = () => {
  return (
    <>
        <h1 className='flex justify-center text-xl font-bold font-sans mb-8'>
            Log in to Book Faster
        </h1>
        <button 
            className='px-3 py-1.5 bg-blue-500 rounded-lg text-white w-3/5 mx-auto' 
            onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
        >
            Sign in
        </button>
    </>
  )
}

export default SignIn