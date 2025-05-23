"use client";
//app
import React, { useState } from "react";
//own
import Badge from "./General/Badge";
import Dropdown from "./General/Dropdown";

export default function AppsCard({ listData, listTitle }) {
  
  const mockOpts = [
    { title: "opt1", link: "sasd" },
    { title: "opt2", link: "sasd" },
    { title: "opt3", link: "sasd" },
  ];


  return (
    <section className='flex w-fit bg-slate-700 bg-opacity-30 justify-center p-1 flex-wrap rounded-sm'>
      <h2 className='text-xl w-full text-white text-center font-bold'>{listTitle}</h2>
      <div className='w-full h-full p-1 align-top'>
        <ul>
          {listData?.map((e, index) => (
            <li key={e.ap_RI} className='flex w-full bg-slate-600 opacity-90 justify-between rounded-md p-1 items-center mb-2'>
              <p className='text-white text-wrap text-xs w-1/4'>{e.app_name}</p>
              <Dropdown title={"actions"} options={e.options}/>
              <Badge text={e.app_status} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
