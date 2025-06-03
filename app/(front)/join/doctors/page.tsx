import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Button } from 'flowbite-react';
import { Mail, Check } from 'lucide-react';
import { CustomAccordian } from '@/Components/frontend/CustomAccordian';
import { FAQItems } from '@/Components/frontend/CustomAccordian';
import Pricing from '@/Components/frontend/Pricing';
export default function page() {
    const features = [
        "Medical App brings Patient to you",
        "Seamless e-prescribing experience",
        "Integrated clinical note-taking",
    ]
    const steps = [
        "List Your Practice",
        "Create Competitive Offerings",
        "Start Seeing Patients",
    ]
    const cards = [
        {
            title: "Begin Your Journey",
            Description: "Start a new application to join our network of healthcare providers.",
            link: "/",
            linkTitle: "Start Application"
        },
        {
            title: "Resume Application",
            Description: "Pick up where you left and complete onboarding process.",
            link: "/",
            linkTitle: "Resume Application"
        },
        {
            title: "Shedule a meeting",
            Description: "Arrange a time for an online meeting to finalize your application",
            link: "/",
            linkTitle: "Shedule Meeting"
        },
        {
            title: "Track Your Progress",
            Description: "Track the status of your application and approval in real-time",
            link: "/",
            linkTitle: "Track Progress"
        }
    ]
    const faq: FAQItems[] = [
        {
            Q: "How can I join the platform as a doctor?",
            A: "To join, simply sign up using your professional email and complete the verification process by uploading your medical license and credentials."
        },
        {
            Q: "Is there a verification process for doctors?",
            A: "Yes, all doctors must undergo a verification process that includes document submission and identity confirmation to ensure patient safety."
        },
        {
            Q: "Are there any fees to join as a doctor?",
            A: "Joining the platform is free. However, a service fee is applied to consultations conducted through the app."
        },
        {
            Q: "Can I set my own consultation hours?",
            A: "Yes, doctors have full control over their availability and can manage their schedules directly from the dashboard."
        },
        {
            Q: "How are payments handled?",
            A: "Payments from patients are collected by the platform and transferred to doctors on a regular payout schedule."
        },
        {
            Q: "What kind of support is available for doctors?",
            A: "Our support team is available 24/7 to assist with technical issues, patient concerns, or account-related questions."
        }
    ];
    return (
        <div className='min-h-screen'>
            <section>
                <div className="max-w-6xl grid mx-auto gap-4 grid-cols-1 md:grid-cols-2 py-10 ">
                    <div>
                        <h1 className='font-bold font-mono text-4xl'>
                            Build a thriving direct-pay practice with medical App
                        </h1>
                        <p className="mt-6 text-xl mb-10 ">
                            Join our growing network of forward-thinking physicians offering affordable, transparent care directly to patients. Reach more people, simplify billing, and grow your private practice—all in one place.
                        </p>
                        <Button className='bg-black text-white '><Link className='flex items-center justify-between gap-3' href="#"><Mail></Mail>List your Practice</Link></Button>
                        {
                            features.map((feature, i) => {
                                return (
                                    <p key={i} className='flex items-center mt-4 font-semibold'>
                                        <Check className=' text-blue-600 w-6 h-6 mr-4 ' />
                                        {feature}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <Image className='w-full' src="/doctor1.png" alt="" width={1180} height={848} />
                </div>
            </section>

            <section>
                <div className="max-w-6xl grid mx-auto gap-2  grid-cols-1 md:grid-cols-2 py-15 ">
                    <Image className='w-full' src="/doctor.png" alt="" width={1200} height={808} />
                    <div>
                        <h1 className='font-bold font-mono text-3xl'>
                            Join Medical App to increase your <span className='text-blue-600' >Revneue</span> today
                        </h1>
                        <p className="mt-2 text-xl mb-4 ">
                            Join our growing network of forward-thinking physicians offering affordable, transparent care directly to patients.
                        </p>
                        {
                            steps.map((step, i) => {
                                return (
                                    <p key={i} className='flex items-center mt-2 font-semibold'>
                                        <Check className=' text-blue-600 w-4 h-4 mr-4 ' />
                                        {step}
                                    </p>
                                )
                            })
                        }
                        <div className='grid grid-cols-2 pt-3'>
                            {
                                cards.map((card, i) => {
                                    return (
                                        <div key={i} className='bg-blue-900 p-6 rounded-lg shadow-2xl m-2'>
                                            <h3 className='text-2xl font-semibold text-white'>
                                                {card.title}
                                            </h3>
                                            <p className='text-gray-100 text-xs py-3'>
                                                {card.Description}
                                            </p>
                                            <Button className='p-3 ' href={card.link}>{card.linkTitle}</Button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </section>

            <section className='max-w-6xl mx-auto gap-4 mt-10 mb-10'>
                <Pricing />
            </section>
            <hr />
            <section className='max-w-3xl mx-auto gap-4 mt-10 mb-10'>
                <CustomAccordian FAQs={faq}></CustomAccordian>
            </section>




        </div>
    )
}
