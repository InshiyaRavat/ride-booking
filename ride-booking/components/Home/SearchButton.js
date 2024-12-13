'use client'
import React, {useContext} from 'react'
import { locationContext } from '../Home/LocationContext'
import { useRouter } from 'next/navigation'

const SearchButton = () => {
    const { lats, longs, setRoute } = useContext(locationContext)
    const router = useRouter()

    const handleClick = async () => {
        console.log("Source Latitude:", lats[0])
        console.log("Source Longitude:", longs[0])
        console.log("Destination Latitude:", lats[1])
        console.log("Destination Longitude:", longs[1])
        console.log(lats)
        console.log(longs)
        router.push('/bookRide')
    }   
  return (
    <div>
        <button 
            className='p-3 bg-[#001D3D] w-full mt-5 text white rounded-lg'
            onClick={handleClick}>
                Search
        </button>
    </div>
  )
}

export default SearchButton