import React from 'react'

export default function WorkSection({data,key}) {
  return (
    <div>
       <div  key={key} className='py-[50px] px-[35px] border w-[350px] hover:bg-red-400 hover:text-white rounded-xl shadow-lg shadow-gray-500/70 '>
          <div className='bg-[rgb(128,128,128)] w-20 h-20 m-auto rounded-full text-4xl p-5 hover:text-red-500 hover:bg-white'>{data.icon}</div>
          <h2 className='text-[#343a3f] text-2xl my-4'> {data.head} </h2>
          <p className='my-4'>{data.text}</p>
          <button>{data.button}</button>
       </div>    
    </div>
  )
}
