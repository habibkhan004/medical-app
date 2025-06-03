import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ServicesProp } from '@/types/type'

export default function ServiceCard({ service }: { service: ServicesProp }) {
  return (
    <Link
      href={service.slug}
      className="group relative flex flex-col sm:flex-row rounded-xl bg-white border border-gray-200 hover:shadow-xl hover:border-blue-500 duration-300 overflow-hidden"
    >
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <Image
          src={service.image || 'https://img.freepik.com/free-vector/medical-healthcare-gradient-logo_23-2148809183.jpg'}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-4 w-full sm:w-2/3">
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {service.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Explore high-quality healthcare services.
        </p>
        <span className="mt-4 inline-block text-sm text-blue-600 font-medium group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  )
}
