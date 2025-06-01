import React, { ReactNode } from 'react'
import Navbar from '@/Components/frontend/Navbar'
import { MegaMenu } from '@/Components/frontend/MegaMenu'
import Footer from '@/Components/frontend/Footer'
export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="p-2 bg-gray-100">
        <MegaMenu />
      </div>
      <div className="pt-4"> {children}</div>
      <Footer></Footer>
    </div>
  )
}
