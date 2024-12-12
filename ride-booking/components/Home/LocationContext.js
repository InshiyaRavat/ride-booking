'use client'
import React,{ createContext, useState } from "react"

export const locationContext = React.createContext()

export const LocationContext = ({ children }) => {
    const [lats, setLats] = useState([])
    const [longs, setLongs] = useState([])
    const [route, setRoute] = useState([])
  
    return (
      <locationContext.Provider value={{ lats, setLats, longs, setLongs, route, setRoute }}>
        {children}
      </locationContext.Provider>
    )
}