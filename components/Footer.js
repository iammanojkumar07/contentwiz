import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='flex flex-1 py-8 items-center justify-center shadow bg-white '>
      <div className='w-full flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0'>
        <div className='flex items-center flex-col  md:flex-row space-y-2 md:space-x-2 md:space-y-0 px-5'>
          <Link href={"/privacy-policy"} className="underline">
            privacy and policy
          </Link>
          <Link href={"/contact"} className="underline">
            contact
          </Link>
        </div>

        <div className="flex items-center space-x-2">Powered by ContentWiz.org</div>

      </div>
    </footer>
  )
}

export default Footer