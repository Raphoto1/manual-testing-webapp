import React from 'react'
import HeaderBasic from '@/Components/HeaderBasic'
import Functions from '@/Components/Functions'
import AppsCard from '@/Components/AppsCard';

export default function platform() {
    const mockOpts = [
        {
          itemTitle: "Sala de lectura",
          options: [
            { title: "opt1", link: "sasd" },
            { title: "opt2", link: "sasd" },
            { title: "opt3", link: "sasd" },
          ],
          status: "ready"
        },
        {
          itemTitle: "Connect",
          options: [
            { title: "opt1", link: "sasd" },
            { title: "opt2", link: "sasd" },
            { title: "opt3", link: "sasd" },
          ],
          status: "pendding"
        },
        {
          itemTitle: "KeepOn",
          options: [
            { title: "opt1", link: "sasd" },
            { title: "opt2", link: "sasd" },
            { title: "opt3", link: "sasd" },
          ],
          status: "ready"
        },
      ];
  return (
    <div>
      <HeaderBasic hName={"casita"} hSubName={"interior"} />
          <Functions />
          <AppsCard listData={mockOpts} listTitle={'Apps Available'} />
    </div>
  )
}
