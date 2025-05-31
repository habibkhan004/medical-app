import React from 'react'
import LoginForm from '@/Components/Auth/LoginForm'
import Image from 'next/image';

export default function page() {
    return (
        <div className='bg-blue-100 '>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2   bg-white border border-gray-200 rounded-lg shadow-sm sm:p-4 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className='hidden md:flex'>
                    <Image src='/login.jpg' alt='login' width={500} height={500} className='w-full' />
                </div>
                <div className='border border-gray-600'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
