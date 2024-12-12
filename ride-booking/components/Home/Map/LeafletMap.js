'use client'
import React, {useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const centerPostion = [51.505, -0.09]
const markerPosition = [51.505, -0.09]
const LeafletMap = () => {
    const [location, setLocation] = useState(null)

    useEffect(()=>{
        if(!navigator.geolocation){
            console.log("Geolocation is not supported by your browser.")
        }
        else{
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude, longitude} = position.coords
                setLocation({latitude, longitude})
            })
        }
    },[])
    if(location){
        centerPostion = [location.latitude, location.longitude]
        markerPosition = [location.latitude, location.longitude]
    }
    
  return (
    <div className='h-[400px] w-full'>
        <MapContainer
            center={centerPostion}
            zoom={13}
            style={{height: "100%", width: "100%"}}
        >
            <TileLayer
                url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={markerPosition}>
                <Popup>
                    You Are Here!
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default LeafletMap