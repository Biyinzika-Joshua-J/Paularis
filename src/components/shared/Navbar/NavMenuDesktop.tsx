"use client"
import React from 'react'
import { navLinks } from '@/constants/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavMenuDesktop = () => {
    const pathname = usePathname()
  return (
    <div className="lg:flex hidden">
    {navLinks.map((item, idx) => (
      <Link
        className={`${idx === 0 ? "mr-4" : "mx-4"} ${pathname===item.link?'underline underline-offset-4':''}`}
        href={`${item.link}`}
        key={idx}
      >
        {item.text}
      </Link>
    ))}
  </div>
  )
}

export default NavMenuDesktop