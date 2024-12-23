import React from 'react'

export default function Navigator({data,key}) {
  return (
    <div>
          <div key={key} className='mt-6 ml-[-75px] md:ml-0 border h-[170px] w-[350px] md:w-[205px] md:mt-[-90px] bg-white text-center hover:bg-[#ff545a]  shadow-lg shadow-gray-500/50 '>
                        <div className=' text-7xl w-20 m-auto mt-3'>{data.icon}</div>
                        <h3>{data.head}</h3>
                        <p className='text-[#a09e9c] '> {data.listing}</p>
            </div>
    </div>
  )
}
