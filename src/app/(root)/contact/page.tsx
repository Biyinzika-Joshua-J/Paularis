import ContactForm from '@/components/forms/ContactForm'
import Path from '@/components/shared/Path/Path'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <main className="">
       <section className="mx-auto w-[90%] ">
        <div className="py-10">
          <Path />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-[90%] flex justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
              <div className=" col-span-1 py-6 px-4 shadow-2xl rounded-lg ">
                <div className="">
                  <div className="flex items-center pb-4">
                    <div className="bg-color-secondary2 h-10 w-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faPhone} className='text-white '/>
                    </div>
                    <h4 className="text-xl font-bold ml-4">
                      Call To Us
                    </h4>
                  </div>
                  <p className="text-sm py-2">
                  We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-sm py-2">
                    Phone <Link className='text-blue-400' href={'tel:256784180208'}>
                      +256784180208
                    </Link>
                  </p>
                </div>
                <div className="py-4">
                  <hr className='border-1 border-black' />
                </div>
                <div className="">
                <div className="flex items-center pb-4">
                    <div className="bg-color-secondary2 h-10 w-10 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faEnvelope} className='text-white '/>
                    </div>
                    <h4 className="text-xl font-bold ml-4">
                      Write To Us
                    </h4>
                  </div>
                  <p className="text-sm py-2">
                  Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-sm py-2">
                  Emails: <Link className="text-blue-500" href={'email:polaris@gmail.com'}>paularis@gmail.com</Link>
                    
                  </p>
                </div>
              </div>
              <div className="shadow-2xl py-6 px-4 rounded-lg col-span-3">
                  <ContactForm/>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact