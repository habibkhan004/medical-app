import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesProp } from '@/types/type'

export default function ServiceList({data}:{data:ServicesProp[]}) {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-col-1 gap-8' >
      {data.map((service, i)=>{
        return <ServiceCard key={i} service={service} />
      })}
    </div>
  )
}
