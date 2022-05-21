import type { NextPage } from 'next'
import Head from 'next/head'

import AboutUsSection from '../components/AboutUsComponents/AboutUsSection'
import Footer from '../components/FooterComponets/Footer'

import Header from '../components/HeaderComponets/Header'
import Hero from '../components/HeroComponents/Hero'
import LoginBanner from '../components/LoginBannerComponents/LoginBanner'

import Recommended from '../components/RecommededComponents/Recommended'

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




      <Footer/>
    </div>
  )
}

export default Home
