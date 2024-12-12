'use client'
import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const centerPostion = [51.505, -0.09]
const markerPosition = [51.505, -0.09]

const LeafletMap = () => {
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