import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Optimization Liaison</title>
        <meta property="og:title" content="Lead Optimization Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
