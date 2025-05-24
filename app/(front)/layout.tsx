import React, {ReactNode} from  'react'
import Navbar from '@/Components/frontend/Navbar'
import { MegaMenu } from '@/Components/frontend/MegaMenu'
export default function layout({children}: {children:ReactNode}){
  return (
    <div>
      <Navbar />
        <div className="bg-green-300 text-gray-950 pl-10 p-3 ">
        <MegaMenu />
      </div>
        {children}
    </div>
  )
}
