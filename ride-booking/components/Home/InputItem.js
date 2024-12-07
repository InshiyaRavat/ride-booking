import Image from 'next/image'
import React from 'react'

const InputItem = (props) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src='/location.png' alt="source location" width={15} height={15}/>
        <input type='text' 
            placeholder={props.typeLoc =='source' ? 'Pickup Location' :'DropOff Location'}
            className='bg-transparent w-full outline-none text-black'/>
    </div>
  )
}

export default InputItem