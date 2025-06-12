import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import UserCorner from "./General/UserCorner";
export default function HeaderBasic({ hName, hSubName }) {
  return (
    <div>
        <div className='flex bg-slate-600 h-auto justify-between items-center'>
          <div className='flex h-fit pl-5 justify-center items-baseline pb-2'>
            <h1 className='text-white font-black text-2xl'>{hName}</h1>
            {hSubName ? <h2 className='text-white pl-2'>{hSubName}</h2> : null}
          </div>
        </div>
    </div>
  );
}
