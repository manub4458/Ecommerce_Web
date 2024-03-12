import React from 'react'
import Optional_navbar from '../components/Optional_navbar'
import ProductPage from './ProductPage'
import Similar from './Similar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>

      <Optional_navbar />
      <ProductPage />
      <Similar />
      <Footer />
    </>
  )
}

export default page