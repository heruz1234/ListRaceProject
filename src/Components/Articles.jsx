import React from 'react'

export default function Articles({data,key}) {
  return (
    <div>
           
            <div key={key} className='border w-[360px] mt-10 md:mt-0 shadow-lg hover:shadow-gray-500/50 shadow-black-500/50'>
                <img src={data.image} alt="" />
                <div className='w-[350px] p-8'>
                    <h2>{data.head}</h2>
                    <div className='flex text-gray-400 py-3'>
                        <p className=' pr-5 border border-y-0 border-l-0'>Posted By <span className='text-black'>ADMIN</span></p>
                        <p className='pl-5'> {data.date} </p>
                    </div>
                    <p className='text-gray-400'> {data.para} </p>
                </div>
        
        
          
        </div>
    </div>
  )
}
