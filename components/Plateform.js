import Image from 'next/image'
import React from 'react'

const Plateform = ({ image = "/twitter.png", name = "Twitter" }) => {
  return (
      <div className='p-3 bg-gray-900 rounded-lg cursor-pointer group space-y-3'>
        <Image src={image} alt={"Twitter"} width={140} height={140} className="group-hover:scale-110 transition-transform duration-200 ease-in"/>
        <p>{name}</p>
    </div>
  )
}

export default Plateform