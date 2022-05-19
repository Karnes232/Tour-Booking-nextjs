import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUsSection from '../components/AboutUsSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LoginBanner from '../components/LoginBanner'
import Recommended from '../components/Recommended'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Punta Cana Tours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Hero />

      <AboutUsSection />

      <LoginBanner />

      <Recommended />
    </div>
  )
}

export default Home
