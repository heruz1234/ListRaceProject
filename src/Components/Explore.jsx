import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import {FcLike } from "react-icons/fc";

export default function Explore({data,key}) {

  return (
    <div>
          <div key={key} className='w-[350px] bg-white mb-16  text-left hover:shadow-lg shadow-gray-500/70'>
                <img src={data.image_1} alt="" />
                <div className='px-4 py-4' >

                    <p className=' mb-4 '> {data.para_1} </p> 
                    <div className='flex flex-wrap list-none w-[100%]  '>

                      

                         <div>  
                           {
                          data.list_1 == 5 ? <p className={` text-white px-2 bg-[#64e18a] `}>{data.list_1}</p> :  
                          data.list_1 > 4 ? <p className={`px-2 text-white bg-[red] `}>{data.list_1}</p> :
                          <p className={`px-2 text-white bg-[blue] `}>{data.list_1}</p>
                          
                          } 
                        </div>
                         <li className='px-2'> {data.list_2} </li>
                         <li className='px-2  border border-x-gray-400 border-y-0'>From <span className='text-[red]'> {data.list_3}</span></li>
                         <li className='px-2'> {data.list_4}</li>
                    </div>
                    <div className='flex border border-x-0 border-b border-t-0 py-5'>
                         <img src={data.image_2}  alt="" className='h-10 pt-2 pr-2' />
                         <p> {data.para_2} </p>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-[red] '> {data.para_3} </p>
                         <div className='flex w-[40%]'>
                             <CiLocationOn  className='mx-3' />
                             <FiUpload className='mx-3' />
                             <FcLike className=' mx-3' />
                         </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
