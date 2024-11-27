import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className=' w-full '>
        <div id='hero' className='h-[85vh] md:h-[100vh] bg-gray-400 w-[100%] text-center '>
            <div className='m-auto w-[75%] pt-40'>
               <h1 className='text-3xl md:text-6xl font-bold text-white'>BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED</h1>
               <p className='pt-5 text-xl text-white'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
            </div>
            <div className='md:flex flex-wrap h-[70px] m-auto mt-20 md:mt-16 w-[85%] '>
                <div className='flex md:w-[40%] bg-white border border-y-0'>
                    <h3 className='py-5 pl-5'>What?</h3>
                    <input type="text" className='w-[75%] pl-2' placeholder='Ex:Place,Resturent,Food,Automoble' />
                    <GiHamburgerMenu className='my-6 w-5 h-5' />
                </div>
                <div className='mt-5 md:mt-0 flex md:w-[40%]  bg-white'> 
                    <h3 className='py-5 pl-5'>Location</h3>
                    <input type="text"  className='w-[75%] pl-2' placeholder='Ex:London,Newyork,Rome' />
                    <FaLocationCrosshairs className='my-6 w-5 h-5' />
                </div>
                <button className='bg-red-400 mt-6 md:mt-0 text-white py-4 px-8 md:ml-10'>Search</button>
            </div>
        </div>
       
    </div>
  )
}
