import AboutUsSection from '../components/AboutUsComponents/AboutUsSection'

import Hero from '../components/HeroComponents/Hero'
import Layout from '../components/layout'
import LoginBanner from '../components/LoginBannerComponents/LoginBanner'

import Recommended from '../components/RecommededComponents/Recommended'

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase'
import { useEffect, useState } from 'react'

const Home = () => {
  const [tours, setTours] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'tours'))
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        setTours((tours) => [...tours, data])
      })
    }
    fetchData().catch(console.error)
  }, [])
  return (
    <Layout>
      <Hero />

      <AboutUsSection />

      <LoginBanner />

      <Recommended tours={tours} />
    </Layout>
  )
}

export default Home
