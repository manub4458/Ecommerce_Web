import React from 'react'
import Product_card from './Product_card'
import Link from 'next/link'

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

                    <div className='flex justify-center gap-x-8 my-4 flex-wrap'>
                        <Link href='/Product'>
                            <Product_card

                                image="/product3.avif"
                                product_name="Stormborn"
                                product_description="Oversized Pure Cotton Tshirt"
                                price="599"
                                original_price="999"
                                discount="45"
                            />
                        </Link>

                        <Link href='/Product2'>
                            <Product_card

                                image="/product4.avif"
                                product_name="Here & Now"
                                product_description="Printed Cotton Pure Cotton"
                                price="399"
                                original_price="699"
                                discount="45"
                            />
                        </Link>
                        <Link href='/Product3'>
                        <Product_card

                            image="/product8.avif"
                            product_name="HIGHLANDER"
                            product_description="Men Blue Slim Fit Stretchable Jeans"
                            price="399"
                            original_price="699"
                            discount="45"
                        />

                        </Link>
                        <Link href='/Product4'>

                        <Product_card

                            image="/product6.avif"
                            product_name="Arrow"
                            product_description="Pure Cotton  Slim Fit Formal Shirt"
                            price="1199"
                            original_price="2099"
                            discount="40"
                        />
</Link>
<Link href='/Product5'>

                        <Product_card

                            image="/product7.avif"
                            product_name="Tee Projekt"
                            product_description="Standard Collar Cotton Formal Shirt"
                            price="549"
                            original_price="2749"
                            discount="80"
                        />
                        </Link>

                    </div>

                    <div className='flex justify-center gap-x-8 my-4 flex-wrap'>
                    <Link href='/Product6'>
                        <Product_card

                            image="/product9.avif"
                            product_name="Bene Kleed"
                            product_description="Men Wide Leg Baggy Fit Cotton Jean"
                            price="599"
                            original_price="999"
                            discount="45"
                        />
</Link>

<Link href='/Product7'>

                        <Product_card

                            image="/product10.avif"
                            product_name="High Star"
                            product_description="Denim Jacket"
                            price="1371"
                            original_price="2759"
                            discount="51"
                        />
                        </Link>
<Link href='/Product8'>


                        <Product_card

                            image="/product11.avif"
                            product_name="Roadster"
                            product_description=" Men Colourblocked Lightweight Puffer Jacket"
                            price="1196"
                            original_price="3149"
                            discount="62"
                        />
                        </Link>
<Link href='/Product9'>

                        <Product_card

                            image="/product12.avif"
                            product_name="Red Tape"
                            product_description="Men Colourblocked PU High-Top Sneakers"
                            price="1119"
                            original_price="5599"
                            discount="80"
                        />
                        </Link>
                        <Link href='/Product10'>

                        <Product_card

                            image="/product13.avif"
                            product_name="Red Tape"
                            product_description="Men Colourblocked  Foam Sneakers"
                            price="1769"
                            original_price="5899"
                            discount="70"
                        />
                        </Link>

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