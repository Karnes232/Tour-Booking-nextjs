import React from 'react'

const LoggedIn = () => {
  return (
    <>
        <h1 className='flex justify-center text-2xl font-medium font-sans mb-8 text-center mx-auto w-3/4'>
            Top Rated Tours are Waiting for You
        </h1>
        <button 
            className='px-3 py-1.5 bg-blue-500 rounded-lg text-white w-3/5 mx-auto' 
            // onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
        >  
            Book a Tour Now
        </button>
                
    </>
  )
}

export default LoggedIn