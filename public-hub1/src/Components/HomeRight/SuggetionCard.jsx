import React from 'react'

const SuggetionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2016/12/30/01/45/angel-1939761_640.png' alt='' />
    <div className='ml-2'>
        <p className='text-sm font-semibold'>username</p>
        <p className='text-sm font-semibold opacity-70m'>Follows you</p>
    </div>
    </div>
    <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggetionCard