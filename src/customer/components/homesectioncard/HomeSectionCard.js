import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div style={{boxShadow:'0px 0px 5px 0px'}} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[10rem]'>
           <img className='object-cover object-top w-full h-full' src={product.imageUrl}/> 
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.brand}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
