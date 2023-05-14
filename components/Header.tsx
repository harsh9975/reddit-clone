import Image from 'next/image'
import React from 'react'
import logo from '../assets/reddit-1.svg'
import secLogo from '../assets/reddit-2.svg'
import { HiHome, HiChevronDown, HiSearch, HiOutlineSparkles, HiOutlineGlobeAlt, HiOutlineVideoCamera,HiOutlineChatAlt, HiOutlineBell, HiPlus, HiOutlineSpeakerphone,HiOutlineMenu } from "react-icons/hi";


const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer flex items-center justify-center'>
        <Image
          // style={{objectFit:'contain'}}
          src={logo}
          alt=""
        />
      </div>
      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HiHome className='h-5 w-5' />
        <p className='ml-2 hidden lg:inline' style={{width:'auto'}}>Home</p>
        <HiChevronDown className='h-5 w-5' />
      </div>
      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-50 px-3 py-1'>
        <HiSearch className='h-6 w-6 text-gray-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type='text' placeholder='Search Reddit' />
        <button hidden type="submit"></button>
      </form>
      <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
        <HiOutlineSparkles  className='icon h-5 w-5' />
        <HiOutlineGlobeAlt  className='icon h-5 w-5'/>
        <HiOutlineVideoCamera  className='icon h-5 w-5'/>
        <hr className='h-10 border border-gray-100' />
        <HiOutlineChatAlt className='icon h-5 w-5'/>
        <HiOutlineBell className='icon h-5 w-5'/>
        <HiPlus className='icon h-5 w-5'/>
        <HiOutlineSpeakerphone className='icon h-5 w-5'/>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <HiOutlineMenu className='icon h-5 w-5'/>
      </div>
      <div className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
      <div className='relative h-5 w-5 flex-shrink-0'>
        <Image
        src={secLogo}
        height="20"
        alt=""
        />
      </div>
      <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  )
}

export default Header
