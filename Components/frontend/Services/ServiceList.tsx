import React from 'react'
import ServiceCard from './ServiceCard'
export default function ServiceList() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols2 grid-col-1 gap-8' >
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </div>
  )
}
