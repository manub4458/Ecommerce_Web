import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Arrivals from './Arrivals'
import ShopNow from './ShopNow'
import MyProducts from './MyProducts'
import Product_card from './Product_card'
import Category from './Category'
import Category_Cards from './Category_Cards'


const Landing = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Arrivals />
            {/* <ShopNow /> */}
            <MyProducts />
            {/* <Product_card /> */}
            <Category />
            {/* <Category_Cards /> */}
          

        </>
    )
}

export default Landing