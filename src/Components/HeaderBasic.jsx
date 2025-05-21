import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import UserCorner from "./General/UserCorner";
export default function HeaderBasic({ hName, hSubName }) {
  return (
    <div>
      <header>
        <div className='flex bg-slate-600 h-auto justify-between items-center'>
          <div className='h-fit pl-5'>
            <h1 className='text-white font-black text-2xl'>{hName}</h1>
            {hSubName ? <h2 className='text-white pl-2'>{hSubName}</h2> : null}
          </div>
          <div className='h-fit pr-5'>
            <UserCorner />
          </div>
        </div>
      </header>
    </div>
  );
}
