import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate=useNavigate();
  // const handleCardClick=()=>{
  //   navigate(`/product/5`)
  // }
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='product-card w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl}/>
      </div>
      <div className='text-part bg-white p-3'>
        <div>
          <p className='font-bold'>{product.title}</p>
          <p className='opacity-50'>{product.brand}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>{product.discountedPrice}</p>
          <p className='line-through opacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
