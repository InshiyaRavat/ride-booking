import React from 'react'
import InputItem from "../Home/InputItem"

const SearchSection = () => {
  return (
    <div className='p-2 md:pd-6 border-[2px] rounded-xl'>
        <p className='text-[25px] text-[#001D3D]'>Get a Ride</p>
        <InputItem typeLoc='source'/>
        <InputItem typeLoc='destination'/>
        <button className='p-3 bg-[#001D3D] w-full mt-5 text white rounded-lg'>Search</button>
    </div>
  )
}

export default SearchSection