import React from 'react'

const HomeSectionCard = () => {
  return (
    <div style={{boxShadow:'0px 0px 5px 0px'}} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[10rem]'>
           <img className='object-cover object-top w-full h-full' src='https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/i/h/xxl-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imaggvvnywmgthyq.jpeg?q=70'/> 
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
