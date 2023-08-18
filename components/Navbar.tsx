import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant'

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexBetween gap-10'>
        <Link href="/dashboard">
          <h1>
            PLN UIP NUSRA
          </h1>
        </Link>
        <ul className='xl:flex hidden text-sm gap-7'>
          {NavLinks.map((link) => (
            <Link className='hover:text-sky-700' 
            href={link.href} key={link.key}>{link.text}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar