"use client";

import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";

import ServiceList from "./Services/ServiceList";

export default function TabbedItems() {
    const tabs= [
        {
            title: "Popular Services",
            icon : HiUserCircle,
            content: [

            ]
        },

        {
            title: "Doctors",
            icon : HiUserCircle,
            content: [
                
            ]
        },
        {
            title: "Specialists",
            icon : HiUserCircle,
            content: [
                
            ]
        },
        {
            title: "Symptoms",
            icon : HiUserCircle,
            content: [
                
            ]
        },
    ]

  return (
    <Tabs aria-label="Tabs with underline" variant="underline" className="mt-5">
        {
            tabs.map((tab ,i)=>{
                return(
                        <TabItem key={i} active title={tab.title} icon={tab.icon}>
                           <ServiceList></ServiceList>
                        </TabItem>
      
                )
            })
        }
     
    </Tabs>
  );
}
