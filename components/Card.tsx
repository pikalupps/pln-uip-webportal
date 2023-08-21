import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props:any) => {

  return (
    <div>
      <div className='border rounded-md p-8 text-center'>
        <Image 
          alt={props.alt}
          src={props.src}
          quality="100"
          width={200}
          height={200}
          className='mb-2'>
        </Image>

        <div className=''>
          <h1>{props.alt}</h1>
          <p  className='mb-4'>Address</p>
          <Link className='button px-4' href='/' key='OpenMap'>Open Map</Link>
        </div> 
      </div>
    </div>
  )
}

export default Card