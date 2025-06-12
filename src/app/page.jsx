"use client";
//app
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
//own
import LoginForm from "@/Components/Forms/LoginForm";
import RegisterSteps from "@/Components/General/RegisterSteps";
import BtnToArea from "@/Components/Forms/Alone/BtnToArea";
export default function Home() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [areaInfoActive, setAreaInfoActive] = useState(false);
  console.log("user from page", user?.unsafeMetadata.area);
  const chkUser = async () => {
    if (user) {
      setAreaInfoActive(true);
    }
  };

  useEffect(() => {
    chkUser();
  }, [user]);
  return (
    <div className='general-bg h-dvh'>
      <section id='homeSplash' className='flex w-full h-svh bg-slate-800 justify-center flex-wrap'>
        <div id='textBlock' className='flex w-full flex-wrap h-fit pl-10'>
          <div className='w-4/5'>
            <h1 id='mainText' className='text-7xl text-white'>
              Welcome to
              <br /> CreativeRafa
              <br /> Client Site
            </h1>
          </div>
          <div className='w-full'>
            <h3 id='subText' className='text-2xl'>
              Multipotential Artist for Multipotential DREAMS
            </h3>
          </div>
        </div>
        <div className='flex w-full justify-around items-center flex-wrap'>
          {!areaInfoActive ? (
            <div className='flex w-full justify-around items-center flex-wrap'>
              <div>
                <h2 className='text-2xl text-white'>New Client?</h2>
                <RegisterSteps />
              </div>
              <div>
                <h2 className='text-2xl text-white'>Lets Create</h2>
                <LoginForm />
              </div>
            </div>
          ) : (
            <div>
              <BtnToArea isVisibleIn={true} />
            </div>
          )}
        </div>
        <div id='servicesGeneral' className=' flex w-full'>
          <motion.div
            className='w-1/4 h-20 bg-pink-500'
            whileHover={{ width: "100%", z: 5 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}>
            <h2 className=' text-white'>Mograph</h2>
          </motion.div>
          <Link href='/platform/testing' className='w-1/4'>
            <motion.div
              className='h-20 bg-pink-100 flex items-center justify-center'
              whileHover={{ width: "100%" }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}>
              <h2 className='text-white'>Testing</h2>
            </motion.div>
          </Link>

          <motion.div
            className='w-1/4 h-20 bg-purple-400'
            whileHover={{ width: "100%" }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}>
            <h2 className=' text-white'>Dev</h2>
          </motion.div>

          <motion.div
            className='w-1/4 h-20 bg-green-500'
            whileHover={{ width: "100%" }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}>
            <h2 className=' text-white'>Live Events</h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
