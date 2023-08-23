import React from 'react'
import Image from 'next/image'

const Login = () => {
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
            <input id='username' className='input-form' type="text" placeholder='Username'/>
          </div>
          <div>
            <input className='input-form' type="text" placeholder='Password'/>
          </div>
          <input className='button' type="button" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default Login