'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    if(e.target.name === 'Ride'){
      router.push('/')
    }else{
      router.push('/history')
    }
  }
  const headerMenu = [
    {
      id : 1,
      name : 'Ride',
      icon : '/ride.jpg'
    },
    {
      id : 2,
      name : 'History',
      icon : '/box.jpg'
    }
  ]
  return (
    <div className='p-3 pb-3 pl-10 pr-10 border-b-[4px] shadow-sm border-gray-200 flex items-center justify-between'>
      <div className='flex gap-24 items-center'>
        <Image src='/HOP-ON-LOGO.png' alt='logo'width={40} height={40}/>
        <div className='flex gap-6 items-center'>
          {headerMenu.map((item)=>(
            <div key={item.id} className='flex gap-2 items-center'>
              <Image src={item.icon} width={17} height={17}/>
              <button onClick={handleClick} name={item.name} className='text-[18px] font-medium text-black'>{item.name}</button>
            </div>
          ))}
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default Header