import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#464c5c]  py-2'>


                <div className='flex justify-around  items-center justify-center'>

                    <div>
                        <h2 className=' font-medium text-2xl text-white'>
                            Fashion Store
                        </h2>
                    </div>

                    <div className='flex gap-x-8  text-yellow-50'>

                        <li>
                            Home
                        </li>

                        <li>
                            Shop
                        </li>
                        <li>
                            About us
                        </li>
                        <li>
                            All Products
                        </li>
                        <li>
                            Contact Us
                        </li>

                    </div>

                    <div className='flex gap-x-8  text-yellow-50'>

                        <img
                            src='/wishlist.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />

                        <img
                            src='/search.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />
                        <img
                            src='/user.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />
                        <img
                            src='/cart.png'
                            alt='Wishlist'
                            width="30"
                            height="30"

                        />

                    </div>



                </div>

            </div>

        </>
    )
}

export default Navbar