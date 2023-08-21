import Image from 'next/image'
import React from 'react'

const Background = () => {
  return (
    <Image 
      alt='background'
      src='/background.png'
      quality="100"
      layout='fill'>
    </Image>
  )
}

export default Background