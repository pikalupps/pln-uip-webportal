import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props:any) => {

  return (
    <div>
      <div className='flex-1 drop-shadow rounded-md p-8 text-center bg-white'>
        <div className='flex justify-center mb-5'>
          <Image 
            alt={props.alt}
            src={props.src}
            quality="100"
            width={100}
            height={100}>
          </Image>
        </div>

        <div>
          <h1 className='textTittle'>{props.alt}</h1>
          <p className='textSub'>{props.address}</p>
          <p className='textSub'>{props.city}</p>
        </div> 
      </div>
    </div>
  )
}

export default Card