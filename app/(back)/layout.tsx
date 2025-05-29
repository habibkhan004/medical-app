import React, { ReactNode } from 'react'
import NavBar from '@/Components/dashboard/NavBar'
import SideBar from '@/Components/dashboard/SideBar'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className="p-4">{children}</div>
      </div>

    </div>
  )
}
