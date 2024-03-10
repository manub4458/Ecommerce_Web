import React from 'react'

const Category_Cards = ({ category, image }) => {
    return (
        <>
            <div>
                <div className='card2'>
                    <img
                        src={image}
                        alt='Product'
                        width={190}
                        height={200}
                        className='w-[260px]  rounded-lg'
                    />
                    <div className='my-1 space-y-1'>
                        <p className='text-[20px] text-center font-medium '>
                            {category}
                        </p>
                        {/* <p className='text-sm text-center'>
       {product_description}
    </p>
    <p className='text-sm text-center space-x-2'>
       Rs.{price} <span> <s>Rs.{original_price}</s></span>  <span className='text-red-500'>{(discount)}%off</span>
    </p> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category_Cards