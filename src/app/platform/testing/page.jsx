
import React from 'react'

import HeaderBasic from '@/Components/HeaderBasic'
import Functions from '@/Components/Functions'
import AppsListFull from '@/Components/FlatLists/Apps/AppsListFull';
import AppsListByDev from '@/Components/FlatLists/Apps/AppsListByDev';
export default function platform() {
  // bring apps info
  
  return (
    <div className='flex flex-col gap-4 bg-gray-900'>
      <HeaderBasic hName={"casita"} hSubName={"interior"} />
      <Functions />
      <AppsListFull />
      <AppsListByDev />
    </div>
  )
}
