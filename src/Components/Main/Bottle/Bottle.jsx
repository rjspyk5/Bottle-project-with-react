import React from 'react'
export const Bottle = ({name,img,price}) => {
  return (
    <div className=' space-y-2 border rounded-xl '>
        <img src={img} className='rounded-t-xl' alt="" />
        <p className='text-center'>Price: ${price}</p>
        <h1 className='text-center text-2xl font-bold'>{name}</h1>
    </div>
  )
}
