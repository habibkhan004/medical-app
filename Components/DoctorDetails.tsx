'use client'
import React, { useState } from 'react'

export default function DoctorDetails() {
    const [isActive, setActive] = useState("availability");
    return (
        <div className='py-10'>
            <div className="flex justify-between items-center gap-2 ">
                <button onClick={() => setActive("details")}
                    className={isActive === "details" ? ('bg-blue-600 py-2 font-mono px-6 tracking-widest uppercase text-white w-full cursor-pointer ') : ('bg-slate-600 py-2 font-mono px-6 uppercase text-white w-full cursor-pointer')}>
                    Service Details</button>
                <button onClick={() => setActive("availability")} className={isActive === "availability" ? ('bg-blue-600 py-2 font-mono px-6 uppercase tracking-widest text-white w-full cursor-pointer ') : ('bg-slate-600 py-2 font-mono px-6 uppercase text-white w-full cursor-pointer')} >Availabilty</button>
            </div>
            <div className="py-8 px-6">
                {
                    isActive === "availability" ? (
                        <div>
                            Availibility Details Component
                        </div>
                    ) : (
                        <div>
                            Service Details Component
                        </div>
                    )
                }

            </div>

        </div>
    )
}
