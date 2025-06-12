'use client'
import React from "react";

import HeaderBasic from "@/Components/HeaderBasic";
import Functions from "@/Components/Functions";
import AppsListFull from "@/Components/FlatLists/Apps/AppsListFull";
import AppsListByDev from "@/Components/FlatLists/Apps/AppsListByDev";
import { useUser } from "@clerk/nextjs";
export default function platform() {
  //userInfo from clerk
  const { isSignedIn, isLoaded, user } = useUser();
  // bring apps info

  return (
    <div className='flex flex-col gap-4 bg-gray-900 max-h-max'>
      <HeaderBasic hName={user?.unsafeMetadata.area} hSubName={user?.unsafeMetadata.subArea} />
      <Functions />
      <AppsListFull />
      <AppsListByDev />
    </div>
  );
}
