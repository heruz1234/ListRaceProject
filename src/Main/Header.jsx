import React from 'react'

export default function Header() {
    const menu = [
        "HOME",
        "HOW IT WORKS",
        "EXPLORE",
        "REVIEW",
        "BLOG",
        "CONTACT"
    ]
  return (
    <div className='fixed w-[100%] bg-white'>
        <header className='flex items-center justify-between px-[100px] py-5 border '>
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
