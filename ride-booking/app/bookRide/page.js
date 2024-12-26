'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState} from 'react'

export default function BookRide() {
    const [distance, setDistance] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const queryDistance = new URLSearchParams(window.location.search).get('distance')
        if (queryDistance) {
        setDistance(queryDistance / 1000)
        }
    }, [])

    const handleClick = async (e) => {
        router.push(`/payment?amount=${e.target.value}`)
    }
    const travelOptions = [
        {
            id: 1,
            name: 'Uber X',
            seat: 4,
            desc: ' The most affordable option for everyday rides; a standard car with no extra luxury.',
            amount: 1.1,
            image: '/UberX.png'
        },
        {
            id: 2,
            name: 'Uber Comfort',
            seat: 4,
            desc: 'A ride in newer, mid-sized cars with extra legroom. Drivers have higher ratings.',
            amount: 1.6,
            image: '/uberComfort.png'
        },
        {
            id: 3,
            name: 'Uber XL',
            seat: 6,
            desc: 'Affordable rides for larger groups, offered in SUVs or minivans.',
            amount: 2.0,
            image: '/uberXL.png'
        },
        {
            id: 4,
            name: 'Uber Black',
            seat: 4,
            desc: 'Premium rides in luxury black cars driven by highly-rated professional drivers.',
            amount: 1.8,
            image: '/uberBlack.png'
        },
        {
            id: 5,
            name: 'Uber Black SUV',
            seat: 6,
            desc: 'A luxury SUV option for larger groups, featuring premium vehicles and professional drivers.',
            amount: 2.2,
            image: '/uberBlackSUV.png'
        },
        {
            id: 6,
            name: 'Uber Pool / Uber Share',
            seat: 1,
            desc: 'Shared rides with other passengers going in the same direction; costs are split.',
            amount: '0.5',
            image: '/uberPool.jpg'
        },
        {
            id: 7,
            name: 'Uber Green',
            seat: 4,
            desc: 'Environmentally friendly rides in hybrid or fully electric vehicles.',
            amount: 1.2,
            image: '/uberGreen.jpg'
        },
        {
            id: 8,
            name: 'Uber Premier',
            seat: 4,
            desc: 'High-end rides in premium cars with experienced drivers.',
            amount: 1.4,
            image: '/uberPremier.png'
        },
        {
            id: 9,
            name: 'Uber Moto',
            seat: 1,
            desc: ' A quick and cost-effective ride on a motorcycle or scooter.',
            amount: 0.8,
            image: '/uberMoto.png'
        },
        {
            id: 10,
            name: 'Uber Auto',
            seat: 3,
            desc: 'Affordable rides in auto-rickshaws (specific to regions like India).',
            amount: 0.9,
            image: '/uberAuto.png'
        },
        {
            id: 11,
            name: 'Uber Lux',
            seat: 4,
            desc: 'The ultimate luxury option with high-end vehicles and top-rated drivers.',
            amount : 2.5,
            image: '/uberLux.png'
        },
        {
            id: 12,
            name: 'Uber WAV (wheelchair Accessible Vehicles)',
            seat: 4,
            desc: 'Accessible rides for passengers with wheelchairs or mobility devices.',
            amount: 1.1,
            image: '/uberWAV.png'
        }
    ]
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold text-center text-[#001D3D] mb-6">
            Book Your Ride Right Away! 🤩🚗
        </h2>
        {distance>0 ? (
            <div className="bg-white shadow-lg rounded-lg p-4">
                {travelOptions.map((option, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-5 border-b border-gray-200 py-4"
                    >
                        <div className="flex items-center gap-5 flex-1">
                            <Image
                                src={option.image}
                                alt="travel option"
                                width={100}
                                height={100}
                                className="rounded"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-[#001D3D] mb-1">
                                    {option.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {option.desc}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <h4 className="text-sm text-gray-600 mb-1">
                                Seats: {option.seat}
                            </h4>
                            <h4 className="text-lg font-semibold text-[#001D3D]">
                                $ {(option.amount * distance).toFixed(2)}
                            </h4>
                        </div>
                        <button onClick={handleClick} value={(option.amount * distance).toFixed(2)} className="px-4 py-2 bg-[#001D3D] text-white rounded hover:bg-[#003366]">
                            Book
                        </button>
                    </div>
                ))}
            </div>
            ) : (
                <p className="text-center text-gray-600">
                    Loading travel options... Please wait!
                </p>
            )
        }
    </div>
  )
}
