import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
    const [menuIcon, setmenuIcon] = useState (false)
    const changeMenu =() => {
        setmenuIcon(!menuIcon)
    }
    const menu = [
        "HOME",
        "HOW IT WORKS",
        "EXPLORE",
        "REVIEW",
        "BLOG",
        "CONTACT"
    ]
  return (
    <div className=' bg-[#f1f1f1]'>
        <header className='flex items-center, justify-between, px-4 md:px-[100px] py-5 w-[100%] '>
            <div className=' md:hidden'>
                    {
                        menuIcon === true ?
                        <GiHamburgerMenu onClick={changeMenu} className='border border-[red] rounded-lg text-4xl p-1' />
                        : <GiHamburgerMenu onClick={changeMenu} className='border border-[red] rounded-lg text-4xl p-1' />
                    }
            </div>
            <p className='md:text-2xl font-bold uppercase pl-40 md:pl-0'>list <span className='text-[red]'>race</span></p>
            <ul className='hidden md:flex'>
                    {
                        menu.map((eachItem)=>(
                            <div className='py-1 px-3 text-sm hover:cursor-pointer hover:text-red-400'>{eachItem}</div>
                        ))
                    }
            </ul>
         
        
        </header>
        {
                menuIcon === true ?
            <div className='bg-[rgb(0,0,0,0.1)], h-[70vh], absolute w-full'>
            {
                    menu.map ((eachItem) => 
                        <li className='py-2 px-3 border  text-sm hover:cursor-pointer hover:text-red-400'>{eachItem}</li>
                    )
                }
         </div>
         : ''
        }
               
        
    </div>
  )
}
