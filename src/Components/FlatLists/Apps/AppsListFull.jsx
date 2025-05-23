'use client'
import React from 'react'
import AppsCard from '../../AppsCard'
import { useGetApps } from '@/Hooks/useGetApps.hook';

function AppsListFull() {
const {payload, error, isValidating} = useGetApps();

  return (
      <>
          {isValidating ? <p>Loading...</p> : <AppsCard listData={payload} listTitle={'All Apps Available'}/>}
          {error && <p>Error loading apps</p>}  
          
      </>
  )
}

export default AppsListFull