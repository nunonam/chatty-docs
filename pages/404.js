import React from 'react'

import Link from 'next/link'

import Logo from '../components/Logo'
import { Heading } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='relative z-40 p-3 border-b sm:px-6 lg:px-8 bg-primary text-primary'>
        <header className='relative flex justify-between mx-auto max-w-7xl'>
          <div className='flex items-center flex-none w-6 mr-sm'>
            <Link href='/'>
              <a className='rounded text-primary' aria-label='Go to dashboard'>
                <Logo />
              </a>
            </Link>
          </div>
        </header>
      </div>
      <div className='flex flex-col items-center justify-center flex-1'>

        <div className='z-20 px-3 text-center lg:px-0 lg:-mt-2'>
          <Heading>404</Heading>
          <div className='text-lg font-semibold mb-sm md:mb-1 sm:text-2xl'>Sorry, that page could not be found.</div>
          <p className='mb-6 sm:text-lg text-secondary'>
            The requested page either doesn&apos;t exist or you don&apos;t have access to it.
          </p>

          {/* <div className='flex items-center justify-center text-lg'>
            <a href='https://docs.chatty-cloud.com' className='mx-2 lg:mx-3 text-blue'>
              Documentation
            </a>
            <a href='https://chatty-cloud.com/support' className='mx-2 lg:mx-3 text-blue'>
              Support
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
