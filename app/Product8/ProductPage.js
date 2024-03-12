
"use client"

import { useState } from 'react';
import Navbar from '../components/Navbar';

const ProductPage = ({ productId }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    const images = [
        '/product11.avif',
        '/product111.avif',
        '/product112.avif',
        '/product113.avif',
        '/product114.avif',
    ];

    return (

        <>

            <div className='my-6 '>

                <div className='flex  justify-evenly '>
                    <div
                        className='space-y-4'
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product ${productId} - Thumbnail ${index + 1}`}

                                width={40}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>

                    <div className='' >
                        <div className='flex justify-center items-center card3'>
                            <img src={images[selectedImage]} alt={`Product ${productId}`}
                                width={400}
                                className='space-y-6 w-[550px] h-[700px] rounded-md justify-center items-center'
                            />
                        </div>
                    </div>

                    <div className='ml-10 space-y-3'>
                        <h2 className='font-bold text-xl'>
                            Roadster
                        </h2>
                        <p className='font-medium'>
                            Men Colourblocked Lightweight Puffer Jacket
                        </p>
                        <p>
                            Rs.1196 <span> MRP <s>Rs.3149</s></span>
                        </p>
                        <p className='text-[#03A685] font-semibold'>
                            Inclusive of all taxes
                        </p>

                        <p className='font-semibold'>
                            SELECT SIZE
                        </p>
                        <div className='flex gap-x-4 '>
                            <button className='border text-sm  border-[#333333] rounded-full px-3 hover:border-red-600 hover:border-1'>
                                S
                            </button>
                            <button className='border text-sm border-[#333333] rounded-full px-3 hover:border-red-600 hover:border-1'>
                                M
                            </button>
                            <button className='border text-sm border-[#333333] rounded-full px-3 hover:border-red-600 hover:border-1'>
                                L
                            </button>
                            <button className='border text-sm border-[#333333] rounded-full px-3 hover:border-red-600 hover:border-1'>
                                XL
                            </button>
                            <button className='border text-sm border-[#333333] rounded-full p-2 hover:border-red-600 hover:border-1'>
                                XXL
                            </button>

                        </div>

                        <div className='flex gap-x-6 '>

                            <button className='flex justify-center items-center gap-x-6 px-4 py-3 rounded-lg bg-[#212121] text-white'>
                                <img
                                    src='/bag.png'
                                    alt='Bag'
                                    width={20}
                                    height={40}

                                />

                                <p className=''>
                                    ADD TO BAG
                                </p>
                            </button>

                            <button className='flex justify-center items-center gap-x-6 px-4 py-3 bg-[#ffffff] hover:bg-yellow-100/20 rounded-lg  '>
                                <img
                                    src='/heart2.png'
                                    alt='Bag'
                                    width={20}
                                    height={40}

                                />

                                <p className=''>
                                    WISHLIST
                                </p>
                            </button>
                        </div>

                        <div className='leading-6'>
                            <h2 className='font-bold'>
                                PRODUCT DETAILS
                            </h2>

                            <p className='pt-2'>
                                Black colourblocked lightweight puffer jacket, has a stand collar, 2 pockets,
                                <br />
                                has a zip closure, sleeveless, straight hemline, polyester lining engineered
                            </p>



                        </div>

                        <div className='leading-6'>
                            <h2 className='font-semibold'>
                                Size and Fit
                            </h2>

                            <p className='pt-2'>Size worn by the model: M</p>
                            <p>Chest: 38"</p>
                            <p>Height: 6'</p>


                        </div>

                        <div className='leading-6'>
                            <h2 className='font-semibold'>
                                Material & Care
                            </h2>
                            <p className='pt-2'>100% Polyester</p>
                            <p>Machine Wash</p>

                        </div>


                    </div>

                </div>

            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    // Fetch data from an API or database based on the productId
    const { productId } = context.params;

    // For simplicity, returning the productId as a prop
    return {
        props: {
            productId,
        },
    };
}


export default ProductPage;
