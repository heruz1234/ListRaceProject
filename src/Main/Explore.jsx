import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { FcLike } from "react-icons/fc";

export default function Explore() {
  return (
    <div className='bg-[#f8fafb] text-center py-12 pt-8'>
        <h1 className='pt-16 pb-6 text-3xl font-bold text-gray-500 '>EXPLORE</h1>
        <p className=' text-lg text-gray-400'>Explore New place, food, culture around the world and many more</p>
        <div className='flex flex-wrap justify-between py-10  px-28'>
            <div className='w-[350px] bg-white mb-16  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e1.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Tommy Helfinger Bar</p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>
                         <li className='px-2 bg-blue-500 '>4.5</li>
                         <li className='px-2'>10 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>5$-300$</span></li>
                         <li className='px-2'>Resturent</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[red] '>Close</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
            <div className='w-[350px] bg-white mb-16  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e2.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Swim And Dine Resort</p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>
                         <li className='px-2 bg-blue-500 '>4.5</li>
                         <li className='px-2'>8 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>50$-500$</span></li>
                         <li className='px-2'>Hotel</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[green] '>Open</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
            <div className='w-[350px] bg-white mb-16  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e3.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Europe Tour</p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>
                         <li className='px-2 bg-yellow-400 '>5.0</li>
                         <li className='px-2'>8 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>5k$-10k$</span></li>
                         <li className='px-2'>Destination</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[red] '>Close</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
            <div className='w-[350px] bg-white  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e4.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Banglow With Swiming Pool</p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>
                         <li className='px-2 bg-purple-500 '>5.0</li>
                         <li className='px-2'>10 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>10k$-15k$</span></li>
                         <li className='px-2'>Real Estate</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[red] '>Close</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
            <div className='w-[350px] bg-white  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e5.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Vintage Car Expo</p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>
                         <li className='px-2 bg-green-500 '>4.2</li>
                         <li className='px-2'>8 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>500$-1200$</span></li>
                         <li className='px-2'>Automotion</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[green] '>Open now</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
            <div className='w-[350px] bg-white  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src="/public/Image/e6.jpg" alt="" />
                 <div className='px-4 py-4' >
                    <p className=' mb-4 '>Destination</p> 
                    <div className='flex flex-wrap list-none w-[1o0%]  '>
                         <li className='px-2 bg-orange-500 '>5.0</li>
                         <li className='px-2'>15 ratings</li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'>5k$-10k$</span></li>
                         <li className='px-2'>Hotel</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src="/public/Image/person.png"  alt="" className='h-10 pt-2 pr-2' />
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[red] '>Close</p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </div> 
  )
}

