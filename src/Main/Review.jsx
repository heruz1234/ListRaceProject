import React from 'react'

export default function Review() {
  return (
    <div id='review' className='py-[127px] px-[120px] relative bg-center'>
        <div className='flex flex-wrap justify-between '>
            <div className='text-white text-center'>
                <div className='text-6xl font-bold'>90K+</div>
                <h2  className='text-3xl'>Listings</h2>
            </div>
            <div className='text-white text-center'>
                <div className='text-6xl font-bold'>40k+</div>
                <h2  className='text-3xl'>Listing Categories </h2>
            </div>
            <div className='text-white text-center'>
                <div className='text-6xl font-bold'>65K+</div>
                <h2  className='text-3xl'>Visitors</h2>
            </div>
            <div className='text-white text-center'>
                <div className='text-6xl font-bold'>50K+</div>
                <h2  className='text-3xl'>Happy Clients</h2>
            </div>
        </div>
    </div>
  )
}
