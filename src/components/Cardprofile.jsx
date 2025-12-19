import React, { useState } from 'react'

const Cardprofile = () => {

  const [togle, setTogle] = useState(false)

  function funTogle() {
    return setTogle(prev => !prev);
  }



  return (
    <div className={`w-[538px] h-[717px] relative flex justify-center items-center flex-col px-[65px] border border-gray-400 rounded-[50px] gap-9 ${togle ? "bg-[#252525] text-white" : "bg-white border border-gray-400"}`}>
        
        <button onClick={funTogle} className={`w-[180px] py-2 absolute -top-20 -right-3 rounded-md  text-xl cursor-pointer ${togle ? "border text-black" : "bg-[#252525] text-white"}`}>{togle ? "Light" : "Dark"}</button>
        
        <img width={200} height={200} className="rounded-full" src="/public/foto profil.jpg" alt="foto profil" />

        <div className='w-full flex items-center flex-col text-center gap-6'>
            <h1 className='text-[35px] font-[700]'>Joeylene Rivera</h1>
            <h3 className='text-[23px] text-[#26235C] font-[400]'>Web Developer</h3>
            <p>A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma</p>
        </div>

        <p className='w-68.75 h-11 border-2 rounded-md flex justify-center items-center bg-[#26235C] text-white text-[20px]'>joeylenerivera@gmail.com</p>

        <div className='flex items-center gap-6'>
            <img width={35} height={35} src="/public/Twitter.svg" alt="" />
            <img width={35} height={35} src="/public/instagram.png" alt="" />
            <img width={35} height={35} src="/public/dribble.png" alt="" />
            <img width={35} height={35} src="/public/LinkedIn.svg" alt="" />
            <img width={35} height={35} src="/public/github.png" alt="" />
            <img width={35} height={35} src="/public/Dev.svg" alt="" />
        </div>
    </div>
  )
}

export default Cardprofile