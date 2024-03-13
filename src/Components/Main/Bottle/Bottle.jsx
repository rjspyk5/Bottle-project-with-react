import React from 'react';
export const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className=' space-y-2 border rounded-xl '>
      <img src={img} className='rounded-t-xl' alt='' />
      <h1 className='text-center text-2xl font-bold'>{name}</h1>
      <p className='text-center'>Price: ${price}</p>
      <div className='flex justify-center pb-5'>
        <button
          onClick={() => handleAddToCart(bottle)}
          type='button'
          className='btn rounded-lg text-white text-center mx-auto bg-yellow-500 p-2'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
