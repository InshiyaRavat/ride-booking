'use client'
import React, {useContext} from 'react'
import { locationContext } from '../Home/LocationContext'

const SearchButton = () => {
    const { lats, longs, setRoute } = useContext(locationContext)

    const handleClick = async () => {
        console.log("Source Latitude:", lats[0])
        console.log("Source Longitude:", longs[0])
        console.log("Destination Latitude:", lats[1])
        console.log("Destination Longitude:", longs[1])

        const response = await fetch (`https://us1.locationiq.com/v1/directions/driving/${lats[0]},${longs[0]};${lats[1]},${longs[1]}?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_ACCESS_TOKEN}&continue_straight=true`)
        const data = await response.json()
        console.log(data)

        const polyline = data.routes[0].legs[0].steps.map(step => {
            return [step.maneuver.location[0], step.maneuver.location[1]]
        });
        setRoute(polyline)
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