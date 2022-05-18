import type { NextPage } from 'next'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Image from 'next/image'
import Header from '../../components/Header'

const signIn: NextPage = ({ providers }: any) => {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center py-2 min-h-screen -mt-56 px-14 text-center'>
        <Image src='/logo-travel-y-tour.png' 
                width={320}
                height={320}
                objectFit='contain'
                priority
            />
        <p className="font-xs italic">This is not a REAL app. Built just to learn</p>
        <div className='mt-40'>
        {
          Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button 
                className='p-3 bg-blue-500 rounded-lg text-white' 
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))
        }
        </div>
      </div>
      
      
      
    
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default signIn
