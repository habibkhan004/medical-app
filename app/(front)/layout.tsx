import React, {ReactNode} from  'react'
import Navbar from '@/Components/frontend/Navbar'
export default function layout({children}: {children:ReactNode}){
  return (
    <div>
      <Navbar />
        {children}
    </div>
  )
}
