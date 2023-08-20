import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card flex justify-center'>
        <Link className='button px-6' href='/login' key='Login'>Masuk</Link>
      </div>
    </div>
  )
}

export default Home