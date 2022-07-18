import * as React from 'react'
import PropTypes from 'prop-types'

import Footer from './FooterComponets/Footer'

import Header from './HeaderComponets/Header'
import Head from 'next/head'
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Punta Cana Tours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
