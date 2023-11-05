"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter()

  const { status } = useSession();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMassage] = useState('')

  const handleSubmit = async () => {
    setMassage("Signing in...");

    try {
      const signInResponse = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (!signInResponse || signInResponse.ok !== true) {
        setMassage("Periksa Kembali Email dan Password Anda!")
      } else {
        router.refresh();
      }

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.refresh();
      router.push("/dashboard")
    }
  }, [status])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='card drop-shadow-md bg-white text-center'>
        <div>
          <div className='flex items-center justify-center'>
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
          </div>
          <h1 className='pb-5'>Single sign-on</h1>
        </div>
        <form action="" className='flex flex-col gap-4 w-80'>
          <div>
            <input className='input-form' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input className='input-form' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className='button' onClick={handleSubmit}>
            Sign In
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  )
}

export default SignInForm