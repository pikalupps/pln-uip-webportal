import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <Image 
      alt='background'
      src='/background.jpg'
      width={1000}
      height={1000}>
    </Image>
  )
}

export default Background