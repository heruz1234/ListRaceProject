import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGooglePlusCircle } from "react-icons/ai";


export default function Copyright() {
  return (
    <div className='text-gray-400 md:flex items-center justify-between w-[80%] m-auto py-10 border border-x-0 border-t-0'>
        <h2>©Copyright. Designed And Developed By Themesine</h2>
        <div className='flex justify-between w-[35%]'>
            <p className='flex hover:text-[red]'><IoCallOutline className='mt-2'/><span className='pl-2'> +1(222)7778888</span></p>
            <FaFacebook className='w-8 h-8 text-gray-400 hover:text-[red] hover:bg-white border border-white rounded-full' />
            <TiSocialTwitterCircular className='w-8 h-8 text-gray-400 hover:text-[red] hover:bg-white border border-white rounded-full' />
            <TiSocialLinkedinCircular className='w-8 h-8 text-gray-400 hover:text-[red] hover:bg-white border border-white rounded-full' />
            <AiFillGooglePlusCircle className='w-8 h-8 text-gray-400 hover:text-[red] hover:bg-white border border-white rounded-full' />

        </div>
    </div>
  )
}
