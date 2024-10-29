
import React from 'react'

import BtnCustom from './General/BtnCustom'

export default function Functions() {
  return (
      <div className='flex justify-between p-2 gap-2'>
          <BtnCustom text={'new Test'} />
          <BtnCustom text={'new question'} />
          <BtnCustom text={'new app'} />
          <BtnCustom text={'new Context'} />
          <BtnCustom text={'New Fake User'} />
          <BtnCustom text={'new Developer'} />
    </div>
  )
}
