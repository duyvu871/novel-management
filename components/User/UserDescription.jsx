import React from 'react'

export default function UserDescription({ description }) {
  return (
    <div className='bg-white rounded-lg px-8 py-4 relative'>
        <hr className='mb-2'/>
        <h3 className='font-bold text-sm text-center'>Mô tả</h3>
        <div>
            {description}
        </div>
        <hr className='mt-2' />
    </div>
  )
}
