"use client"
import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'

interface Props {
    inputClasses:string
    iconSrc:string
    placeholder:string
    backgroundColor?: string
    onChangeFunction?:()=>void
}

const TextIconInput = ({inputClasses, iconSrc,placeholder,backgroundColor, onChangeFunction}:Props) => {
  return (
    <div className={`flex items-center border pr-2 border-white ${backgroundColor}`}>
    <Input
      type="email"
      placeholder={placeholder}
      className={`no-focus border-none ${inputClasses}`}
      onClick={() => {}}
    />
    <div className="ml-2">
      <Image
        src={iconSrc}
        alt="arrow"
        height={20}
        width={20}
        className="cursor-pointer active:scale-75 transition-all"
        onClick={()=>{}}
      />
    </div>
  </div>
  )
}

export default TextIconInput