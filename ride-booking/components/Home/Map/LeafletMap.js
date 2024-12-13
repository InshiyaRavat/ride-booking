'use client'
import React, {useContext, useEffect, useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { locationContext } from '../LocationContext'

const centerPostion = [22.6802, 72.8802]
const markerPosition = [22.6802, 72.8802]

const LeafletMap = () => {
    const {lats, longs, route} = useContext(locationContext)

    useEffect(()=>{
      console.log(lats.length)
      console.log(longs.length)
      if( lats.length > 1 && longs.length > 1){
        console.log ("source: ",lats[0],", ",longs[0])
        console.log ("Destination: ",longs[1],", ",longs[1])
      }
    },[lats,longs])
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