import React from 'react'
import Product_card from './Product_card'

const MyProducts = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className='text-2xl font-semibold ml-32'>
                        Top Products
                    </h1>
                </div>

                <div className='space-y-8'>

                    <div className='flex justify-center gap-x-8 my-4'>

                        <Product_card

                            image="/product3.avif"
                            product_name="Stormborn"
                            product_description="Oversized Pure Cotton Tshirt"
                            price="599"
                            original_price="999"
                            discount="45"
                        />

                        <Product_card

                            image="/product4.avif"
                            product_name="Here & Now"
                            product_description="Printed Cotton Pure Cotton"
                            price="399"
                            original_price="699"
                            discount="45"
                        />

                        <Product_card

                            image="/product5.avif"
                            product_name="Roadster"
                            product_description=" Printed Pure Cotton T-shirt"
                            price="399"
                            original_price="699"
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

                            image="/product7.avif"
                            product_name="Tee Projekt"
                            product_description="Standard Collar Cotton Formal Shirt"
                            price="549"
                            original_price="2749"
                            discount="80"
                        />

                    </div>

                    <div className='flex justify-center gap-x-8 my-4'>

                        <Product_card

                            image="/product3.avif"
                            product_name="Stormborn"
                            product_description="Oversized Pure Cotton Tshirt"
                            price="599"
                            original_price="999"
                            discount="45"
                        />

                        <Product_card

                            image="/product4.avif"
                            product_name="Here & Now"
                            product_description="Printed Cotton Pure Cotton"
                            price="399"
                            original_price="699"
                            discount="45"
                        />

                        <Product_card

                            image="/product5.avif"
                            product_name="Roadster"
                            product_description=" Printed Pure Cotton T-shirt"
                            price="399"
                            original_price="699"
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

                            image="/product7.avif"
                            product_name="Tee Projekt"
                            product_description="Standard Collar Cotton Formal Shirt"
                            price="549"
                            original_price="2749"
                            discount="80"
                        />

                    </div>
                </div>

                <div className='flex justify-center my-4'>
                    <button className='p-1 text-md font-semibold border border-black  rounded-md hover:bg-[#333333] hover:text-white hover:border hover:border-white'>
                        View All Products
                    </button>
                </div>

            </div>

        </>
    )
}

export default MyProducts