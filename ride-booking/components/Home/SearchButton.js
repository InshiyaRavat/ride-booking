'use client'
import React, { useContext } from 'react'
import { locationContext } from '../Home/LocationContext'
import { useRouter } from 'next/navigation'

const SearchButton = () => {
  const { lats, longs } = useContext(locationContext)
  const router = useRouter()

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (deg) => (deg * Math.PI) / 180
    const R = 6371e3 

    const φ1 = toRadians(lat1)
    const φ2 = toRadians(lat2)
    const Δφ = toRadians(lat2 - lat1)
    const Δλ = toRadians(lon2 - lon1)

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = R * c 
    return distance
  }

  const handleClick = () => {
    console.log('Source Latitude:', lats[0])
    console.log('Source Longitude:', longs[0])
    console.log('Destination Latitude:', lats[1])
    console.log('Destination Longitude:', longs[1])

    const distance = calculateDistance(
      lats[0],
      longs[0],
      lats[1],
      longs[1]
    )
    console.log('Distance (meters):', distance)

    router.push(`/bookRide?distance=${distance}`)
  }

  return (
    <div>
      <button
        className="p-3 bg-[#001D3D] w-full mt-5 text-white rounded-lg"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  )
}

export default SearchButton
