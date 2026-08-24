import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h1 className='bg-black text-white px-3 py-2 rounded-full uppercase'>Target Audience</h1>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar