"use client"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import TextIconInput from '@/components/forms/TextIconInput'

const EmailSubscriptionForm = () => {
  return (
    <TextIconInput
                inputClasses="bg-black  placeholder-text-color_light"
                iconSrc="/assets/icons/right-arrow.png"
                onChangeFunction={() => {}}
                placeholder='Enter Your Email'
              />
  )
}

export default EmailSubscriptionForm