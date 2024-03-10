import React from 'react'

const Arrivals = () => {
    return (
        <>
            <div>

                <div className='flex justify-center gap-x-28 my-20 flex-wrap space-y-4'>

                    <div className='bg-[#a547a2] h-fit w-max gap-x-8 px-14 py-14 flex justify-around rounded-lg'>

                        <div className='space-y-3'>
                            <p className='font-semibold'>
                                New Arrival
                            </p>
                            <p className='text-[10px]'>
                                There are Many  Variations <br /> of Cloths available
                            </p>

                            <button
                                className='m-1 p-1 border border-gray-800 text-[10px] rounded-lg'
                            >
                                Shop Now
                            </button>
                        </div>

                        <div>
                            <img
                                src='/arrival1.png'
                                alt='Wishlist'
                                width="120"
                                height="100"
                                className='h-[100px] '

                            />
                        </div>


                    </div>


                    <div className='bg-[#2d6071] h-fit w-max gap-x-8 px-14 py-14 flex justify-around rounded-lg'>

                        <div className='space-y-3'>
                            <p className='font-semibold'>
                                New Arrival
                            </p>
                            <p className='text-[10px]'>
                                There are Many  Variations <br /> of Cloths available
                            </p>

                            <button
                                className='m-1 p-1 border border-gray-800 text-[10px] rounded-lg'
                            >
                                Shop Now
                            </button>
                        </div>

                        <div>
                            <img
                                src='/arrival2.png'
                                alt='Wishlist'
                                width="120"
                                height="30"
                                className='h-[100px] '

                            />
                        </div>


                    </div>


                    <div className='bg-[#43308f] h-fit w-max gap-x-8 px-14 py-14 flex justify-around rounded-lg'>

                        <div className='space-y-3'>
                            <p className='font-semibold'>
                                New Arrival
                            </p>
                            <p className='text-[10px]'>
                                There are Many  Variations <br /> of Cloths available
                            </p>

                            <button
                                className='m-1 p-1 border border-gray-800 text-[10px] rounded-lg'
                            >
                                Shop Now
                            </button>
                        </div>

                        <div>
                            <img
                                src='/arrival3.png'
                                alt='Wishlist'
                                width="120"
                                height="30"
                                className='h-[100px] '

                            />
                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default Arrivals