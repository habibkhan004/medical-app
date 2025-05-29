import React from 'react'
import Image from 'next/image'
import DoctorDetails from '@/Components/DoctorDetails'
import BookButtonFixed from '@/Components/BookButtonFixed'

export default function page() {
  return (
    <div className='bg-slate-50 min-h-screen rounded-md'>
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-2xl">
        <div className="py-6 px-6">
          <div className="flex items-center justify-between ">
            <div className=''>
              <div className="flex flex-col">
                <h2 className='font-bold text-3xl font-mono uppercase '>Dr.Vijay Patel, PA-C</h2>
                <p>Adult Health</p>
              </div>
              <p className='font-bold'>In person doctor visit</p>
              <p>250, Lincoln Highway, Kendall Park, NJ 0089</p>
            </div>
            <Image src="/doctor.png" alt="doctor-image" width={234} height={207} className='w-36 h-36 rounded-full object-cover' />
          </div>
          <DoctorDetails></DoctorDetails>
          <div className=" bg-blue-300 w-full fixed left-0 font-bold flex items-center justify-between py-6 px-30 shadow-2xl bottom-0 rounded-md">
            <p>$60</p>
            <p>Tue, Mar 12 - 8:00 AM GMT+5</p>
            <div>
            </div>
            <BookButtonFixed />
          </div>
        </div>
      </div>
    </div>
  )
}
