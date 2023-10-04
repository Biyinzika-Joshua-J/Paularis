"use client"
import TextIconInput from '@/components/forms/TextIconInput'
import React from 'react'

const NavSearchForm = () => {
  return (
    <TextIconInput
    inputClasses="bg-color-secondary placeholder-text-color_light"
    placeholder='What are you looking for?'
    iconSrc="/assets/icons/search.png"
    backgroundColor='bg-color-secondary'
    onChangeFunction={()=>{}}
  />
  )
}

export default NavSearchForm