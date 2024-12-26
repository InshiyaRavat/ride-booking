'use client'

import React, { useState, useEffect, useContext } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC)

function PaymentForm() {
  const [amount, setAmount] = useState(0)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const user = useUser()
  const userId = user.id
  const today = new Date()

  useEffect(() => {
    const queryAmount = new URLSearchParams(window.location.search).get('amount')
    if (queryAmount) {
      setAmount(queryAmount)
    }
  }, [])

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet.')
      return
    }

    try {
      const response = await fetch('/api/Payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const { clientSecret } = await response.json()

      const cardElement = elements.getElement(CardElement)
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      })

      if (error) {
        console.error('Payment failed:', error.message)
      } else {
        console.log('Payment successful:', paymentIntent)
        const response = await fetch("http://localhost:4000/history",{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                uId : userId,
                date : today.toISOString().split('T')[0],
                paid : amount,
            })
        })
        router.push('/')
      }
    } catch (error) {
      console.error('Error occurred during payment:', error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">HopOn</h1>
          <p className="text-gray-600">A ride booking system</p>
          <Image src='/HOP-ON-LOGO.png' alt='logo' className='mx-auto' width={40} height={40}/>
        </div>
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="flex flex-col items-center">
            <label htmlFor="amount" className="text-lg font-medium text-gray-700 mb-2">
              Payment Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 text-gray-700 rounded-lg px-4 py-2 w-3/4 text-center focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter amount"
              disabled
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="card" className="text-lg font-medium text-gray-700 mb-2">
              Card Details
            </label>
            <CardElement
              id="card"
              className="border border-gray-300 rounded-lg px-4 py-2 w-3/4 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={!stripe || !elements}>
            Pay ${amount || 0}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}
