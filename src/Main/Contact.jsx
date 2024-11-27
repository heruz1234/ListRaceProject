import React from 'react'

export default function Contact() {
  return (
    <div>
        <div className='text-center py-40 bg-[#f8fafb]'>
            <h1 className='text-3xl p-4'>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h1>
            <p className=' p-2 '>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
            <div className='mt-8 md:flex hover:shadow-lg  m-auto md:w-[550px] '>
                 <input className='p-5 w-[400px]' type="text" placeholder='Enter your email here' />
                <div className='p-5 bg-red-500 m-6 md:m-0 hover:text-red-500 hover:bg-white text-white'>Create Account</div> 
            </div>
              
        </div>
    </div>
  )
}
