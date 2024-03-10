import React from 'react'
import Category_Cards from './Category_Cards'

const Category = () => {
    return (
        <>

            <div>
                <div >

                    <h2 className='ml-32 text-xl font-semibold'>
                        Shop By Category
                    </h2>
                </div>

                <div className='flex justify-center gap-x-8 my-4'>
                    <div>
                        <Category_Cards
                            image='/tshirt.avif'
                            category="T-shirts"
                        />
                    </div>
                    <div>
                        <Category_Cards
                            image='/Shirts.avif'
                            category="Casual Shirts"
                        />
                    </div>
                    <div>
                        <Category_Cards
                            image='/jacket.avif'
                            category="Jackets"
                        />
                    </div>
                    <div>
                        <Category_Cards
                            image='/jeans.avif'
                            category="Jeans"
                        />
                    </div>
                    <div>
                        <Category_Cards
                            image='/shoes.avif'
                            category="Footwear"
                        />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Category