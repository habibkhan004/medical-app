import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Stethoscope, Video } from 'lucide-react'



export default function DoctorCard({isInPerson= false}:{isInPerson?:boolean}) {
        const timeStamps=[
        {
            time:"9:30",
            period: "am"
        },
        {
            time:"10:30",
            period: "am"
        },
        {
            time:"11:30",
            period: "am"
        },
        {
            time:"12:30",
            period: "pm"
        },
        {
            time:"1:30",
            period: "am"
        },
    ]
  return (
    <Link href="/doctors/slug" className='border border-gray-200 bg-white flex flex-col max-w-90 py-3 px-5 text-sm hover:border-gray-950 duration-300 transition-all'>
      <h2 className='font-bold text-2xl font-mono uppercase '>Vijay Patel, PAC</h2>
      {isInPerson && <p>250, Lincoln Highway, Kendall Park, NJ 0089</p>}
        <div className="flex items-center gap-5 py-6 relative">
            <div>
            <Image src="/doctor.png" alt="doctor-image" width={234} height={207} className='w-24 h-24 rounded-full object-cover' />
            {!isInPerson && <p className='bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full absolute left-15 bottom-6  text-blue-700'><Video className='w-6 h-6' /></p>}
    </div>
        <div className="flex flex-col">
                <div className='flex py-4'>
                <Stethoscope  className='w-6 h-6 mr-2' />
                 <span>Family Medicine</span>
                </div>
                <div className="bg-green-300  py-3 px-6 uppercase">
                    Available Today
                </div>
            </div>
        </div>
            <div className="mt-8 py-3 border-t border-gray-200 mb-6">
                <h3 className='flex justify-between'><span>Tue, Mar 12</span> <span>$130</span></h3>
                <div className="py-3 grid grid-cols-3">
                {
                    timeStamps.map((item, i)=>{
                        return <Link className='bg-blue-600 flex text-center text-sm items-center text-white  px-4 m-2 font-mono' href= "#">{item.time} {item.period}</Link>
                    })
                }
                <Link className='bg-blue-800 text-white py-2 px-3 m-2 text-center items-center font-mono' href="/doctors/slug">More</Link>
            </div>
            </div>

    </Link>
  )
}
