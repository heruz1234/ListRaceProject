import React from 'react'

export default function Footer() {
    const menu = [
        "HOME",
        "HOW IT WORKS",
        "EXPLORE",
        "REVIEW",
        "BLOG",
        "CONTACT",
        "MY ACCOUNT"
    ]
  return (
    <div className=' '>
             <header className='flex flex-col sm:block items-center justify-between  m-auto py-10 border border-x-0 border-t-0 '>
            <div>
                <p className='text-2xl font-bold uppercase '>list<span className='text-[red]'>race</span></p>
            </div>
          
        </header>
    </div>
  )
}
