import Link from 'next/link'
import React from 'react'

const Optional_navbar = () => {
  return (
    <>
    
    <div className='  '>


<div className='flex justify-around  items-center justify-center'>

    <div>
        <img 
        
        src='/logo3.png'
        alt='Logo'
        width={85}
        height={40}
        
        />
    </div>

    <div className='flex gap-x-8  '>

       <Link href='/' >
       <li className='font-semibold'>
            Home
        </li>
       </Link>

        <li className='font-semibold'>
            Shop
        </li>
        <li className='font-semibold'>
            About us
        </li>
        <li className='font-semibold'>
            All Products
        </li>
        <li className='font-semibold'>
            Contact Us
        </li>

    </div>

    <div className='flex gap-x-8'>

        <img
            src='/heart2.png'
            alt='Wishlist'
            width="30"
            height="30"
            className=''

        />

        <img
            src='/search2.png'
            alt='Wishlist'
            width="30"
            height="30"

        />
        <img
            src='/user2.png'
            alt='Wishlist'
            width="30"
            height="30"

        />
        <img
            src='/cart2.png'
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

export default Optional_navbar