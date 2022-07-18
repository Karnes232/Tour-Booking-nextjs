import { signIn } from 'next-auth/react'
import React from 'react'

const SignIn = () => {
  return (
    <>
      <h1 className="mb-8 flex justify-center font-sans text-xl font-bold">
        Log in to Book Faster
      </h1>
      <button
        className="mx-auto w-3/5 rounded-lg bg-blue-500 px-3 py-1.5 text-white"
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          signIn()
        }}
      >
        Sign in
      </button>
    </>
  )
}

export default SignIn
