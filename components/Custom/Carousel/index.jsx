import React from 'react'

export default function Carousel({children, }) {
  return (
    <div className='flex flex-nowrap overflow-y-scroll w-full gap-4 py-4'>
        {children}
    </div>
  )
}
