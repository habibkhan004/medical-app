import React from 'react'
import Link from "next/link"
import Image from "next/image"
import img from "../../assets/stetho.jpeg"
export default function ServiceCard() {
  return (
    <Link href="#" className='flex rounded-md bg-slate-200 hover:bg-slate-500 duration-300 gap-4 overflow-hidden border-2 p-2' >
        <Image src={img} alt="titlez" className=' w-1/3 object-cover aspect-video ' ></Image>
        <div className="flex flex-col w-2/3 text-2xl">
           <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
    </Link>
  )
}
