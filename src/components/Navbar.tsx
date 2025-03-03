import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-lavender w-full h-[50px] flex justify-between px-3 items-center">
        <div>Logo</div>
        <div>HILYO</div>
        <div>
            <button className='bg-pale-pink px-2 py-1 rounded-lg border border-mauve items-center'>Login / Signup</button>
        </div>
    </nav>
  )
}

export default Navbar
