import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const LoginBanner = () => {
    const { data: session } = useSession()
    return (
        <div className="backgroundImage bg-opacity-70 mt-8 h-[20vh] md:hidden flex flex-col justify-center ">
            {session ? (
                <>
                    <h1 className='flex justify-center text-2xl font-medium font-sans mb-8 text-center mx-auto w-5/6'>
                        Top Rated Tours are Waiting for You
                    </h1>
                    <button 
                        className='p-3 bg-blue-500 rounded-lg text-white w-4/6 mx-auto' 
                        // onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
                    >
                        Book a Tour Now
                    </button>
                
                </>
            ):(
                <>
                    <h1 className='flex justify-center text-xl font-bold font-sans mb-8'>
                        Log in to Book Faster
                    </h1>
                    <button 
                        className='p-3 bg-blue-500 rounded-lg text-white w-4/6 mx-auto' 
                        onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}
                    >
                        Sign in
                    </button>
                </>
            )}
            
        </div>
    )
}

export default LoginBanner