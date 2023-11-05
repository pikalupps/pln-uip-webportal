import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <nav className='flexBetween navbar bg-white border-b'>
      <div className='flex-1 flexBetween gap-10'>
        <Link href="/dashboard" className='flex items-center'>
          <Image
            alt='logo'
            src='/pln-logo3.png'
            quality="100"
            width={85}
            height={20}>
          </Image>
          <h1 className='font-bold'>
            UIP NUSRA
          </h1>
        </Link>
        <ul className='xl:flex hidden text-sm gap-7 items-center'>
          {NavLinks.map((link) => (
            <Link className='hover:text-sky-700'
              href={link.href} key={link.key}>{link.text}</Link>
          ))}

          {session && session.user?.email ? (
            <Link className='button px-3' href="/auth/signout">Keluar</Link>
          ) : (
            <Link className='button px-3' href="/auth/signin">Masuk</Link>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar