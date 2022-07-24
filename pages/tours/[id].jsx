import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const Tours = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'tours', id)

        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data())
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      } catch (error) {}
    }
    fetchData().catch(console.error)
  }, [id])

  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  )
}

export default Tours
