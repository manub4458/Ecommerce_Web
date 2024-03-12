import React from 'react'
import Product_card from '../components/Product_card'

const Similar = () => {
    return (
        <>
            <div className='mt-20'>

                <div>
                    <h2 className='text-center text-2xl font-semibold'>
                        You May Also Like This
                    </h2>
                </div>

                <div className='flex justify-center gap-x-8 my-8 flex-wrap'>

                    <Product_card

                        image="/product7.avif"
                        product_name="Tee Projekt"
                        product_description="Standard Collar Cotton Formal Shirt"
                        price="549"
                        original_price="2749"
                        discount="80"
                    />


                    <Product_card

                        image="/product3.avif"
                        product_name="Stormborn"
                        product_description="Oversized Pure Cotton Tshirt"
                        price="599"
                        original_price="999"
                        discount="45"
                    />

                    <Product_card

                        image="/product6.avif"
                        product_name="Arrow"
                        product_description="Pure Cotton  Slim Fit Formal Shirt"
                        price="1199"
                        original_price="2099"
                        discount="40"
                    />
                    <Product_card

                        image="/product10.avif"
                        product_name="Arrow"
                        product_description="Pure Cotton  Slim Fit Formal Shirt"
                        price="1199"
                        original_price="2099"
                        discount="40"
                    />

<Product_card

image="/product12.avif"
product_name="Red Tape"
product_description="Men Colourblocked PU High-Top Sneakers"
price="1119"
original_price="5599"
discount="80"
/>

                </div>
            </div>

        </>
    )
}

export default Similar