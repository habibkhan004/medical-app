"use client";

import { TabItem, Tabs } from "flowbite-react";
import { Stethoscope, Microscope, Activity, Syringe } from "lucide-react";

import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";

export default function TabbedItems() {

    const services = [
        {
            title: "Telehealth",
            image: "/docotr2.jpg",
            slug: "tele-health",
        },

        {
            title: "In Person Meeting",
            image: "/doctor1.png",
            slug: "tele-health",
        },
        {
            title: "Mental Health",
            image: "/login.jpg",
            slug: "tele-health",
        },
        {
            title: "UTI Consult",
            image: "/stetho.jpeg",
            slug: "tele-health",
        },
        {
            title: "ED Consult",
            image: "/doctor.png",
            slug: "tele-health",
        },

    ]
    const tabs = [
        {
            title: "Popular Services",
            icon: Stethoscope,
            component: <ServiceList data={services} />,
            content: [

            ]
        },

        {
            title: "Doctors",
            icon: Microscope,
            component: <LinkCards className="bg-slate-700" />,
            content: [

            ]
        },
        {
            title: "Specialists",
            component: <LinkCards className="bg-blue-950" />,
            icon: Activity,
            content: [

            ]
        },
        {
            title: "Symptoms",
            icon: Syringe,
            component: <LinkCards className="bg-green-600" />,
            content: [

            ]
        },
    ]

    return (
        <Tabs aria-label="Tabs with underline" variant="underline" className="mt-5">
            {
                tabs.map((tab, i) => {
                    return (
                        <TabItem key={i} active title={tab.title} icon={tab.icon}>
                            {tab.component}
                        </TabItem>

                    )
                })
            }

        </Tabs>
    );
}
