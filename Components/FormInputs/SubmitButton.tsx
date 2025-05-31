import React from 'react'
import { Loader } from 'lucide-react'
type SubmitButtonProps = {
    title: string,
    buttonType?: "submit" | "reset" | "button" | undefined,
    isLoading: boolean
    loadingTitle: string
}
export default function SubmitButton({ title, buttonType = "submit", loadingTitle, isLoading = false }: SubmitButtonProps) {
    return (
        <>
            {isLoading ? (<button
                type={buttonType}
                disabled
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                <Loader className='w-6 h-6 mr-2  flex-shrink-0 animate-spin' />{loadingTitle}
            </button>) : (
                <button
                    type={buttonType}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                    {title}
                </button>
            )
            }
        </>
    )

}
