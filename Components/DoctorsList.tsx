import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorListCarousal from './DoctorListCarousal'

export default function DoctorsList({title="Telehealth Visit", isInPerson,className}:{title?:string, isInPerson?:boolean, className?: string}) {
const doctors=[
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
    {
        name : "Jhon Doe"
    },
]
  return (
    <div className={className}>
        <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
            {
                isInPerson ? (<Link href="" className='text-blue-700 text-sm flex'>
                    <Map />
                    <span className='ml-2'>Map View</span>
                </Link>)
                :(
                    <ToggleButton></ToggleButton>
                )
            }
            <Link className='py-2 px-5 rounded-md text-sm bg-blue-600 text-gray-50' href="#">See all</Link>
        </div>
        </div>
        <div className="py-4">
            <DoctorListCarousal doctors={doctors} isInPerson={isInPerson}></DoctorListCarousal>
        </div>
    </div>
  )
}
