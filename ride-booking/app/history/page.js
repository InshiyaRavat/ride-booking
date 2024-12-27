'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function History() {
    const [bookedRides, setBookedRides] = useState([])

    useEffect(() => {
        const getAllRides = async () => {
            try {
                const response = await fetch('http://localhost:4000/history')
                const data = await response.json()

                console.log("Fetched history:", data)

                if (data) {
                    setBookedRides(data)
                }
            } catch (error) {
                console.error('Error fetching booked rides:', error)
            }
        }

        getAllRides()
    }, [])

    const today = new Date().toISOString().split('T')[0]

    const handleCancel = (rideId) => {
        console.log(`Canceling ride with ID: ${rideId}`)
    }

    console.log("Booked Rides State:", bookedRides)

    // Sort rides to prioritize today's rides
    const sortedRides = [...bookedRides].sort((a, b) => {
        if (a.date === today && b.date !== today) {
            return -1
        } else if (a.date !== today && b.date === today) {
            return 1
        }
        return 0
    })

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold text-center text-[#001D3D] mb-6">
                Look at all your booked rides here! ✌️😎
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
                {sortedRides.length > 0 ? (
                    sortedRides.map((ride) => (
                        <div key={ride.id} className="flex items-center justify-between gap-5 border-b border-gray-200 py-4">
                            <div className="flex items-center gap-5 flex-1">
                                <Image
                                    src="/HOP-ON-LOGO.png"
                                    alt="travel option"
                                    width={50}
                                    height={50}
                                    className="rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-[#001D3D] mb-1">
                                        Ride ID: {ride.id}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Date: {new Date(ride.date).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Paid: ${ride.paid}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <button
                                    onClick={() => handleCancel(ride.id)}
                                    className={`px-4 py-2 ${
                                        ride.date !== today ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'
                                    } text-white rounded transition ${
                                        ride.date === today ? 'enabled' : 'disabled'
                                    }`}
                                    disabled={ride.date !== today}
                                >
                                    Cancel Ride
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-600">
                        No rides booked yet.
                    </div>
                )}
            </div>
        </div>
    )
}
