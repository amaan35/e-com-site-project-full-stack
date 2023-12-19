import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70'/>
      </div>
      <div className='text-part bg-white p-3'>
        <div>
          <p className='font-bold'>Men Embroidered Jacquard Straight Kurta</p>
          <p className='opacity-50'>SG LEMAN</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>Rs 200</p>
          <p className='line-through opacity-50'>Rs 1000</p>
          <p className='text-green-600 font-semibold'>80% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
