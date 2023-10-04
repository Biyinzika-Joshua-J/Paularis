import React from 'react'
import Navbar from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer/Footer'
import Path from '@/components/shared/Path/Path'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <div className="flex-grow mx-auto w-[90%] py-10">
        <div className="">
          <Path isError={true}/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="py-20">
            <h1 className="h1-bold text-4xl md:text-5xl lg:text-8xl text-center">404 Not Found</h1>
            <p className="text-center py-6">
              Your visited page is not found. You may go to the home page.
            </p>
            <div className="flex items-center justify-center">
              <Link href={"/"} className='text-white bg-btn2 px-4 py-2 hover:bg-btn-hover1'>
              Back to home page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default NotFoundPage