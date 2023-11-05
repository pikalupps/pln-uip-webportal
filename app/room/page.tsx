'use client'

import React from 'react'
import { useState } from 'react'
import { Floor } from '@/constant'
import Image from 'next/image'

const page = () => {
  const [floor, setFloor] = useState(0)

  function downFloor(){
    if(floor > 0){
      setFloor(floor - 1)
    }
  }

  function upFloor(){
    if(floor < 3){
      setFloor(floor + 1)
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-3/5 h-3/5'>
        <div className='card2 bg-white drop-shadow-md p-10 w-full h-full mb-6'>
          <div className='w-full h-full drop-shadow-none'>
            <Image 
              alt={Floor[floor].title}
              src={Floor[floor].src}
              quality="100"
              layout='fill'>
            </Image>
          </div>
        </div>
        <div className='flex text-center w-full justify-center items-center'>
          <input className='button px-4' onClick={() => downFloor()} type="button" value="-" />
          <p className='px-4'>Lantai {floor+1}</p>
          <input className='button px-4' onClick={() => upFloor()} type="button" value="+" />
        </div>
      </div>
    </div>
  )
}

export default page