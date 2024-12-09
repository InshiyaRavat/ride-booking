'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const InputItem = (props) => {
  const [source,setSource] = useState("")
  const [result,setResult] = useState([])

  const handleChange = async (event) =>{
    setSource(event.target.value)
    if(event.target.value.length > 2){
      try{
        const response = await fetch (` https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_ACCESS_TOKEN}&q=${event.target.value}`)
        const data = await response.json()
        setResult(data)
      }
      catch(err){
        console.error("Error while fetching autocomplete suggestions : ",err)
      }      
    }
    else{
      setResult([])
    }
  }
  return (
    <div>
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <div className="flex items-center gap-4">
        <Image src='/location.png' alt="source location" width={15} height={15}/>
        <input type='text' 
            value={source}
            onChange={handleChange}
            placeholder={props.typeLoc =='source' ? 'Pickup Location' :'DropOff Location'}
            className='bg-transparent w-full outline-none text-black'/>
      </div>
      </div>
      {result.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-lg max-h-60 overflow-auto">
          {result.map((suggestion,index)=>(
            <li
              key = {index}
              className="cursor-pointer text-black hover:bg-gray-200 p-2"
              onClick={() => {
                setSource(suggestion.display_name);
                setResult([])
              }}>
                {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default InputItem