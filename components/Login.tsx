import React from 'react'

const Login = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen flex justify-center items-center'>
      <div className='card w-fit h-fit text-center'>
        <div>
          <h1 className='pb-5'>Single sign-on</h1>
        </div>
        <form action="" className='flex flex-col gap-4 w-80'>
          <div>
            <input className='input-form' type="text" placeholder='Username'/>
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