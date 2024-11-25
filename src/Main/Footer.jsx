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
    <div>
             <header className='flex items-center justify-between w-[80%] m-auto py-10 border border-x-0 border-t-0 '>
            <div>
                <p className='text-2xl font-bold uppercase '>list <span className='text-[red]'>race</span></p>
            </div>
            <div>
                <ul className='flex'>
                    {
                        menu.map((eachItem)=>(
                            <li className='py-1 px-3 text-sm hover:cursor-pointer hover:text-red-400'>{eachItem}</li>
                        ))
                    }
                </ul>
            </div>
        </header>
    </div>
  )
}
