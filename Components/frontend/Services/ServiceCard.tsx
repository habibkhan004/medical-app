import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { ServicesProp } from '@/types/type'
export default function ServiceCard({service}:{service:ServicesProp}) {
  return (
    <Link href={service.slug} className='flex rounded-md bg-slate-200 hover:bg-slate-500 duration-300 gap-4 overflow-hidden border-2 p-2' >
        <Image src={service.image} alt={service.title} width="100" height="100" className=' rounded-sm  w-1/3' ></Image>
        <div className="flex flex-col w-1/3 text-2xl">
           <h2>{service.title}</h2>
        </div>
    </Link>
  )
}
