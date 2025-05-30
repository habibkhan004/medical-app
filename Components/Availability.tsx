"use client"
import * as React from "react"
import Link from 'next/link'

import { Calendar } from "@/Components/ui/calendar"
export default function Availability() {
    const timeStamps = [
        {
            time: "9:30",
            period: "am"
        },
        {
            time: "10:30",
            period: "am"
        },
        {
            time: "11:30",
            period: "am"
        },
        {
            time: "12:30",
            period: "pm"
        },
        {
            time: "1:30",
            period: "pm"
        },
        {
            time: "2:30",
            period: "pm"
        },
        {
            time: "3:30",
            period: "pm"
        },
        {
            time: "4:30",
            period: "pm"
        },
    ]
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    const date = bookDate?.getFullYear()
    const formattedDate = `${bookDate?.toString().split(" ").slice(0, 4).join(" ")} - GMT${bookDate?.toString().split("GMT")[1].split(" ")[0]}`;
    console.log(bookDate, formattedDate)
    return (
        <div>
            <h2 className="font-semibold py-4 text-xl ">Select a Date and Time</h2>
            <div className="grid grid-cols-2">
                <div className="sm:col-span-1 col-span-full">
                    <Calendar
                        mode="single"
                        selected={bookDate}
                        onSelect={setBookDate}
                        className="rounded-md border shadow"
                    />
                </div>
                <div className="sm:col-span-1 col-span-full">
                    <div className="px-4">
                        <h2 className='p-3 border border-gray-600   font-semibold text-center'>{formattedDate}</h2>
                        <div className="py-3 grid grid-cols-3">
                            {
                                timeStamps.map((item, i) => {
                                    return <button className='bg-blue-600  text-center text-sm  text-white  p-3 m-2 font-semibold'>{item.time} {item.period}</button>
                                })
                            }
                            <button className='bg-blue-950 text-white p-3 m-2 text-center items-center font-semibold' >More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
