import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='top-0 bg-white z-50 w-full flex flex-row sticky'>
      <div className='w-1/3 flex flex-row items-center justify-between'>
        <img src='https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg' className='ml-5 h-24 w-24 cursor-pointer'/>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg ml-4'>Men</button>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg'>Company</button>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg'>Stores</button>
      </div>
      <div className='w-full flex flex-row items-center justify-end'>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg'>Sign in</button>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg'>Create Account</button>
        <button className='font-bold text-lg hover:bg-slate-200 py-2 px-4 rounded-lg'><SearchIcon/></button>
      </div>
    </div>
  )
}

export default Header
