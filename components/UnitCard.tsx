import React from 'react'
import Image from 'next/image'

const Card = (props:any) => {

  return (
    <div>
      <div className='flex-1 drop-shadow-md rounded-md text-center bg-white'>
        <div className='flex justify-center'>
          <Image 
            alt={props.alt}
            src={props.src}
            quality="100"
            width={250}
            height={150}
            className='rounded-t-md'>
          </Image>
        </div>

        <div className='py-5'>
          <a href={props.map} target='_blank'>
            <h1 className='textTittle hover:text-cyan-400'>{props.alt}</h1>
          </a>
          <p className='textSub'>{props.address}</p>
          <p className='textSub'>{props.city}</p>
          <p className='textSub'>{props.telp}</p>
        </div> 
      </div>
    </div>
  )
}

export default Card