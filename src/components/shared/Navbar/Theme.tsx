"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/context/ThemeProvider'
import { Button } from '@/components/ui/button'

const Theme = () => {
  const {mode, setMode} = useTheme();
  return (
    <div className='mx-2'>
      {
        mode === 'light' ? (
          <Button onClick={()=>{
            localStorage.theme = "dark"
            setMode('dark')
            }}>
            <FontAwesomeIcon icon={faMoon} className=''/>
          </Button>

        ):(
          <Button onClick={()=>{
            localStorage.theme = "light"
            setMode('light')
            }}>
            <FontAwesomeIcon icon={faSun} className=''/>
          </Button>
        )
      }
    </div>
  )
}

export default Theme