'use client'
import React from 'react'
import AppsCard from '../../AppsCard'
import { useGetApps, useGetAppsByDev } from '@/Hooks/useGetApps.hook';

function AppsListFull(devId) {
const {payload, error, isValidating} = useGetAppsByDev(1);

  return (
      <>
          {isValidating ? <p>Loading...</p> : <AppsCard listData={payload} listTitle={'Apps Available by dev'}/>}
          {error && <p>Error loading apps</p>}  
          
      </>
  )
}

export default AppsListFull