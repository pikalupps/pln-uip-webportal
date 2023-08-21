import React from 'react'
import Image from 'next/image'

const Card = (props:any) => {

  return (
    <div>
      <div>
        <Image 
          alt={props.alt}
          src={props.src}
          quality="100"
          width={200}
          height={200}>
        </Image>

        <div className=''>
          <h1>{props.alt}</h1>
          <p>Address</p>
          <p>Open Map</p>
        </div> 
      </div>
    </div>
  )
}

export default Card