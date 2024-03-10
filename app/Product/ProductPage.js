
"use client"

import { useState } from 'react';
import Navbar from '../components/Navbar';

const ProductPage = ({ productId }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    const images = [
        '/product3.avif',
        '/product31.avif',
        '/product32.avif',
        '/product33.avif',
        '/product34.avif',
    ];

    return (

        <>

            <div className='my-6 ml-20'>

                <div className='flex gap-x-14 '>
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

                    <div className='ml-10 space-y-2'>
                           <h2 className='font-bold text-xl'>
                        Stormborn
                           </h2>
                            <p className='font-medium'>
                            Graphic Printed Oversized Drop Shoulder Sleeves <br /> Pure Cotton T-shirt
                            </p>
                            <p>
                            Rs.549 <span> MRP <s>Rs.999</s></span>
                            </p>
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
