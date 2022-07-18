import { useSession } from 'next-auth/react'
import React from 'react'
import LoggedIn from './LoggedIn'
import SignIn from './SignIn'

const LoginBanner = () => {
  const { data: session } = useSession()
  return (
    <div className="backgroundImage mt-8 flex h-[20vh] flex-col justify-center bg-opacity-70 md:hidden ">
      {session ? <LoggedIn /> : <SignIn />}
    </div>
  )
}

export default LoginBanner
