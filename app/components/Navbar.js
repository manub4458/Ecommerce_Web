import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#464c5c]  '>


                <div className='flex justify-around  items-center justify-center'>

                    <div>
                        <img 
                        
                        src='/logo2.png'
                        alt='Logo'
                        width={45}
                        height={40}
                        
                        />
                    </div>

                    <div className='flex gap-x-8  text-yellow-50'>

                    <Link href='/'>
                    <li>
                            Home
                        </li>
                    </Link>

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