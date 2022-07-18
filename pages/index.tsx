import type { NextPage } from 'next'

import AboutUsSection from '../components/AboutUsComponents/AboutUsSection'

import Hero from '../components/HeroComponents/Hero'
import Layout from '../components/layout'
import LoginBanner from '../components/LoginBannerComponents/LoginBanner'

import Recommended from '../components/RecommededComponents/Recommended'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />

      <AboutUsSection />

      <LoginBanner />

      <Recommended />
    </Layout>
  )
}

export default Home
