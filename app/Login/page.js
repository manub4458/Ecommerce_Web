import React from 'react'
import Optional_navbar from '../components/Optional_navbar'
import Loggedin from './Loggedin'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    
    <Optional_navbar />
    <Loggedin />
    <Footer />
    </>
  )
}

export default page