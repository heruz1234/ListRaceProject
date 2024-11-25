import React from 'react'

export default function HeaderTop() {
  return (
    <div className='flex flex-wrap justify-between'>
       <ul>
          <select name="EN" className='border border-y-0 border-l-0 px-4 py-2'>
             <option value="EN">EN</option>
             <option value="BN">BN</option>
             <option value="AB">AB</option>
           </select>
          <select name="USD"  className='border border-y-0 border-l-0 px-4 py-2'>
             <option value="USD">USD</option>
             <option value="EURO">EURO</option>
             <option value="BDT">BDT</option>
           </select>
           ICON
       </ul>
       <ul className='flex' >
        <li  className='border border-y-0 px-4 py-2'>+1 222 777 6565</li>
        <li className='border border-y-0 border-l-0 px-4 py-2'>Sign In</li>
        <li className='border border-y-0 border-l-0 px-4 py-2'>Register</li>
       </ul>
    </div>
  )
}
