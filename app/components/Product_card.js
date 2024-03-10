import React from 'react'

const Product_card = ({ image, product_name, product_description, price, original_price, discount }) => {
    return (
        <>

            <div className='flex '>


                <div class="card rounded-lg">


                    <img
                        src={image}
                        alt='Product'
                        width={190}
                        height={200}
                        className='w-[260px]  rounded-lg'
                    />
                    <div className='my-2 space-y-1'>
                        <p className='text-[16px] text-center font-semibold'>
                            {product_name}
                        </p>
                        <p className='text-sm text-center'>
                            {product_description}
                        </p>
                        <p className='text-sm text-center space-x-2'>
                            Rs.{price} <span> <s>Rs.{original_price}</s></span>  <span className='text-red-500'>{(discount)}%off</span>
                        </p>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Product_card