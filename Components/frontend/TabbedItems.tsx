"use client";

import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

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
            T           his is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
      </TabItem>
                )
            })
        }
    </Tabs>
  );
}
