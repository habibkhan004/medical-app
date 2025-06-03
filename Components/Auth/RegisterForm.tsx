'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { type RegisterInputProps } from '@/types/type';
import { Span } from 'next/dist/trace';
import SubmitButton from '../FormInputs/SubmitButton';
import TextInputs from '../FormInputs/TextInputs';
import { useState } from 'react';
import { createUser } from '@/actions/user';
import { UserRole } from '@prisma/client';
import { toast } from 'react-hot-toast'

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<RegisterInputProps>();
    const [isLoading, setIsLoading] = useState(false)
    async function onSubmit(data: RegisterInputProps) {
        setIsLoading(true)
        data.role = role;
        try {
            const user = await createUser(data)
            if (user && user.status == 200) {
                console.log("User Created Successfully")
                setIsLoading(false)
                console.log(user.data)
                toast.success("User Created Successfully")
                reset()
            } else {
                console.log(user.error)
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-4">
                        <TextInputs label="Full Name" name="fullName" register={register} errors={errors} />
                        <TextInputs label="Email Address" name="email" type='email' register={register} errors={errors} />
                        <TextInputs label="Phone Number" name="phone" type="tel" register={register} errors={errors} />

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password", { required: true })}
                                    id="password"
                                    name="password"
                                    type="password"

                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors["password"] && <span className='text-red-600 text-sm '>Password is required</span>}
                            </div>
                        </div>

                        <div>
                            <SubmitButton title="Sign up" isLoading={isLoading} loadingTitle='Creating Please wait...' ></SubmitButton>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm/6 text-gray-500">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}