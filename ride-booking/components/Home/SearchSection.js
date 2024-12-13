'use client'
import React,{useState} from 'react'
import InputItem from "../Home/InputItem"
import SearchButton from "../Home/SearchButton"
import { locationContext } from '../Home/LocationContext'
import GoogleMapSection from './GoogleMapSection'

const SearchSection = () => {
  const [lats,setLats] = useState([])
  const [longs,setLongs] = useState([])

  return (
    <locationContext.Provider value={{lats,setLats,longs,setLongs}}>
      <div className='space-y-4'>
          <p className='text-2xl font-bold text-[#001D3D]'>Get a Ride</p>
          <InputItem typeLoc='source'/>
          <InputItem typeLoc='destination'/>
          <SearchButton/>     
      </div>
    </locationContext.Provider>
  )
}

export default SearchSection