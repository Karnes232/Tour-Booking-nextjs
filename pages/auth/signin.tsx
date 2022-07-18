import type { NextPage } from 'next'
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Image from 'next/image'
import Header from '../../components/HeaderComponets/Header'

const signIn: NextPage = ({ providers }: any) => {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <Image
          src="/logo-travel-y-tour.png"
          width={320}
          height={320}
          objectFit="contain"
          priority
        />
        <p className="font-xs italic">
          This is not a REAL app. Built just to learn
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
