import React from 'react'

export default function Badge({text}) {
  return (
    <div className='flex bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 text-white text-xs w-1/4 justify-center'>
      {text}
    </div>
  )
}
