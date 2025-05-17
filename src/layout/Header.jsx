import React from 'react'

import logo from '@/assets/logo_no_bg.jpg';

const Header = () => {
  return (
    <div className='h-[64px] w-full bg-white sticky top-0 flex items-center'>
      <span className='logo'>
        <img src={logo} alt="Logo" className='h-[56px] w-auto ms-5'/>
      </span>
    </div>
  )
}

export default Header