import React from 'react'
import Header from '../Main/Header'
import Hero from '../Main/Hero'

import Contact from '../Main/Contact'
import Footer from '../Main/Footer'
import Copyright from '../Main/Copyright'
import Review from '../Main/Review'
import Navigator from '../Components/Navigator'
import WorkSection from '../Components/WorkSection';
import { RiHotelLine } from "react-icons/ri";
import { GiSchoolBag } from "react-icons/gi";
import { TbBuildingStore } from "react-icons/tb";
import { GiHealthCapsule } from "react-icons/gi";
import { TbCarSuv } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa6";
import Articles from '../Components/Articles'
import Explore from '../Components/Explore'

export default function LandingPage() {
  const IconNavigator =[
    {
        icon : <TbBuildingStore />,
        head : 'Resturent',
        listing : '150 listings'
    },
    {
        icon : <GiSchoolBag />,
        head : 'Destination',
        listing : '214 listings'
    },
    {
        icon : <RiHotelLine />,
        head : 'Hotels',
        listing : '185 listings'
    },
    {
        icon : <GiHealthCapsule />,
        head : 'Healthcare',
        listing : '200 listings'
    },
    {
        icon : <TbCarSuv />,
        head : 'Automotion',
        listing : '150 listings'
    }
  ]
  const WorkMenu=[
    {
      icon: <FaRegLightbulb />,
      head: 'Find what you want',
      text: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
      button: 'Read More'
    },
    {
      icon: <FaRegLightbulb />,
      head: 'Choose what to Do',
      text: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
      button: 'Read More'
    },
    {
      icon: <FaRegLightbulb />,
      head: 'Explore amazing Place',
      text: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
      button: 'Read More'
    }
  ]
  const ArticlesMenu=[
    {
      image:"/public/Image/b1.jpg",
      date:'March 2018',
      para: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    },
    {
      image:"/public/Image/b2.jpg",
      date:'March 2018',
      para: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    },
    {
      image:"/public/Image/b3.jpg",
      date:'March 2018',
      para: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    }
  ]
  const ExploreMenu=[
    {
      image_1: "/public/Image/e1.jpg",
      para_1: 'Tommy Helfinger Bar',
      list_1: '4.5',
      list_2: '10 ratings', 
      list_3: '5$-300$', 
      list_4: 'Resturent',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'close'
    },
    {
      image_1: "/public/Image/e2.jpg",
      para_1: 'Swim And Dine Resort',
      list_1: '4.5',
      list_2: '8 ratings', 
      list_3: '50$-500$', 
      list_4: 'Hotel ',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'open'
    },
    {
      image_1: "/public/Image/e3.jpg",
      para_1: 'Europe Tour',
      list_1: '3.0',
      list_2: '8 ratings', 
      list_3: '5k$-10k$', 
      list_4: 'Destination',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'close'
    },
    {
      image_1: "/public/Image/e4.jpg",
      para_1: 'Banglow With Swiming Pool',
      list_1: '5.0',
      list_2: '10 ratings', 
      list_3: ' 10k$-15k$', 
      list_4: ' 10k$-15k$',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'open'
    },
    {
      image_1: "/public/Image/e5.jpg",
      para_1: 'Vintage Car Expo',
      list_1: '4.2',
      list_2: '8 ratings', 
      list_3: '500$-1200$', 
      list_4: 'Automotion',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'open now'
    },
    {
      image_1: "/public/Image/e6.jpg",
      para_1: 'Destination',
      list_1: '2.0',
      list_2: '15 ratings', 
      list_3: '5k$-10k$', 
      list_4: 'Hotel',
      image_2: "/public/Image/person.png", 
      para_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
      para_3: 'close'
    }
  ]
  return (
    <div className='w-[100%]'>
        <Header />
         <Hero />
      
  
    <div>
         <div className='flex flex-wrap md:h-[160vh] justify-between  px-[100px] m-[0,auto]  '>
            {IconNavigator.map((item,index)=>(
                <Navigator
                 key={index}
                 data={item}
                />
            ))}
        </div>
    </div>
   
    <div className='text-center m-auto'>
         <h1 className='text-[#505866] text-2xl font-bold py-4'>HOW IT WORKS</h1>
         <p className='text-[#a09e9c]  py-3'>Learn More about how our website works</p>
         <div className='flex flex-wrap justify-between m-20'>
         {WorkMenu.map((item,index)=>(
                <WorkSection
                key={index}
                data={item}
                
                />
            ))}

         </div>
    </div>
       
       
    <div className='bg-[#f8fafb] w-full text-center py-12 pt-8'>
        <h1 className='pt-16 pb-6 text-3xl font-bold text-gray-500 '>EXPLORE</h1>
        <p className=' text-lg text-gray-400'>Explore New place, food, culture around the world and many more</p>
        <div className='flex flex-wrap justify-between py-10 md:px-28'>
            {ExploreMenu.map((item,index)=>(
               <Explore 
                    key={index}
                    data={item}
               />
               
            ))}
        </div>
    </div>
        <Review />
        
    <div className='my-10 text-center mb-28 '>
        <h1 className=' py-4 text-2xl text-gray-600'>NEWS AND ARTICLES</h1>
        <p>Always upto date with our latest News and Articles</p>
        <div  className='flex flex-wrap text-left justify-between px-28 mt-10'>
            {ArticlesMenu.map((item,index)=>(
                <Articles 
                     key={index}
                    data={item}
                />
            ))}
       
        </div>
  
    </div>
        <Contact />
        <Footer />
        <Copyright />
    </div>
  )
}
