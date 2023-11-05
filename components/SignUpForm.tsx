"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { signUp } from '@/app/actions/users/SignUp';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMassage] = useState('')

  const handleSubmit = async () => {
    setMassage("Signing up...");
    const massage = await signUp(firstName, lastName, email, password);

    //console.log(firstName, lastName, email, password)
    setMassage(massage)
  }

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
            <input className='input-form' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Nama Depan' />
          </div>
          <div>
            <input className='input-form' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Nama Belakang' />
          </div>
          <div>
            <input className='input-form' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          </div>
          <div>
            <input className='input-form' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          </div>
          <button type="button" className='button' onClick={handleSubmit}>
            Daftar
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm