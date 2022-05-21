import { useSession } from 'next-auth/react'
import React from 'react'
import LoggedIn from './LoggedIn'
import SignIn from './SignIn'


const LoginBanner = () => {
    const { data: session } = useSession()
    return (
        <div className="backgroundImage bg-opacity-70 mt-8 h-[20vh] md:hidden flex flex-col justify-center ">
            {session ? (
                <LoggedIn/>
            ):(
                <SignIn/>
            )}
            
        </div>
    )
}

export default LoginBanner