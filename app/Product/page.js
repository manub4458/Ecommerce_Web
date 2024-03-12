import React from 'react'
import ProductPage from './ProductPage'
import Optional_navbar from '../components/Optional_navbar'
import Navbar from '../components/Navbar'
import Similar from './Similar'
import Footer from '../components/Footer'

const page = () => {
  return (
   <>
   
  {/* <Navbar /> */}
  <Optional_navbar />
   <ProductPage 
   
   />
   <Similar />
   <Footer />
   </>
  )
}

export default page