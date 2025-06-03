'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt="Medical Logo"
              src="https://img.icons8.com/color/48/medical-doctor.png"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-black">MedApp</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-black">
            Services
          </a>

          <a href="#" className="text-sm font-semibold text-black">
            Book Appointment
          </a>
          <a href="#" className="text-sm font-semibold text-black">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold text-black">
            Contact Us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold text-white bg-blue-600 rounded-md mr-2 px-6 py-2">
            Log in
          </Link>
          <Link href="/register" className="text-sm font-semibold text-white bg-blue-600 rounded-md px-6 py-2">
            Sign Up
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt="Medical Logo"
                src="https://img.icons8.com/color/48/medical-doctor.png"
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-black">MedApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">
                  Services
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">
                  Book Appointment
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="text-base font-semibold text-white bg-blue-600 rounded-md px-6 py-3 block mb-2 text-center"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="text-base font-semibold text-white bg-blue-600 rounded-md px-6 py-3 block text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
