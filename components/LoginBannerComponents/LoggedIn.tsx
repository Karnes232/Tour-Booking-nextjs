import React from 'react'

const LoggedIn = () => {
  return (
    <>
      <h1 className="mx-auto mb-8 flex w-3/4 justify-center text-center font-sans text-2xl font-medium">
        Top Rated Tours are Waiting for You
      </h1>
      <button
        className="mx-auto w-3/5 rounded-lg bg-blue-500 px-3 py-1.5 text-white"
        // onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
      >
        Book a Tour Now
      </button>
    </>
  )
}

export default LoggedIn
