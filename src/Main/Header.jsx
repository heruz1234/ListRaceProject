import React, { useState } from 'react'

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
    <div className='fixed w-full  bg-white'>
        <header className='flex items-center justify-between px-4 md:px-[100px] py-5 border '>
            <p className='md:text-2xl font-bold uppercase'>list <span className='text-[red]'>race</span></p>
            <ul className='hidden md:flex'>
                    {
                        menu.map((eachItem)=>(
                            <li className='py-1 px-3 text-sm hover:cursor-pointer hover:text-red-400'>{eachItem}</li>
                        ))
                    }
            </ul>
            <div className=' md:hidden'>
                    {
                        menuIcon === true ?
                        <div onClick={changeMenu}>open</div>
                        : <div onClick={changeMenu}>close</div> 
                    }
            </div>
        
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
