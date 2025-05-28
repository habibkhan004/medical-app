'use client'
import React, { useState } from 'react'

export default function DoctorDetails() {
    const [isActive, setActive] = useState("availability");
  return (
    <div className='py-10'>
      <div className="flex justify-between items-center gap-2 ">
        <button className='bg-blue-600 py-2 font-mono px-6 uppercase text-white w-full cursor-pointer '>Service Details</button>
        <button className='bg-slate-600 py-2 font-mono px-6 uppercase text-white w-full cursor-pointer' >Availabilty</button>
      </div>
      <div className="py-8 px-6">
        <div>
        Servive Availibility Component
      </div>
    <div>
        Servive Availibility Component
      </div>
      </div>

    </div>
  )
}
