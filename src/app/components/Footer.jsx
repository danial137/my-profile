import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
         <Image src='/images/pr.svg' width={100} height={100} />
        <p className='text-slate-600'>All Right Reserved</p>
        <p className='text-primary-400'> craeted by <a href="persianstore.org" target='blank' className='text-orange-500'>persian store</a></p>
      </div>
    </footer>
  )
}

export default Footer