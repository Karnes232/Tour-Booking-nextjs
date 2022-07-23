import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CreateTourMain from '../components/CreateTourComponent/CreateTourMain'

import Hero from '../components/HeroComponents/Hero'
import Layout from '../components/layout'

const Create: NextPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push('/') // redirects if there is no user
    }
  }, [session])
  return (
    <>
      {session ? (
        <Layout>
          <Hero />
          <CreateTourMain />
        </Layout>
      ) : (
        <></>
      )}
    </>
  )
}

export default Create
