'use client'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

 const NavBar = () => {
    const [isClick,setIsClick] = useState(false);

    const open = () =>{
        setIsClick(true)
    }
    const close = () =>{
        setIsClick(false)
    }
  return (
    <>
    <nav className='bg-black'>
     <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
       <div className='flex items-center'>
        <div className='flex-shrink-0'>
          <a  className="text-white" href='/'>Logo</a>
        </div>
       </div>
       <div className='hidden md:block'>
        <div className='ml-4 flex items-center space-x-4'>
          <a href='/Home' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
          <a href='/About' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>About</a>
          <a href='/Service' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Service</a>
          <a href='/Contact' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Contact</a>
          <Button className='bg-white'>Login</Button>
        </div>
       </div>
       <div className='md:hidden flex justify-center'>
        {
            isClick ? ( <CloseIcon sx={{color:"white"}} onClick={close}/>)
            :( <MenuIcon sx={{color:"white"}} onClick={open}/>)
        }
         
       </div>
      </div>
     </div>
     {
        isClick && (
            <div className='md:hidden'>
              <div className='px-2 pb-3 pt-2 space-y-1 sm:px-3'>
                <a href='/Home' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                <a href='/About' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>About</a>
                <a href='/Service' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Service</a>
                <a href='/Contact' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>Contact</a>
                <Button className='bg-white'>Login</Button>
              </div>
            </div>
        )
     }
    </nav>
    </>
  )
}
export default NavBar;
