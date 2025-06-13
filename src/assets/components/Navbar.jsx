import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className='h-14 items-center w-full flex justify-between bg-[#6c757d] text-[#dee2e6] p-2.5'>
                <div className="text-2xl font-bold">EHAABSYED</div>
                <ul className='flex gap-7 list-none cursor-pointer'>
                    <li className='hover:underline hover:scale-105'>Home</li>
                    <li className='hover:underline hover:scale-105'>About</li>
                    <li className='hover:underline hover:scale-105'>Footer</li>
                    <li className='hover:underline hover:scale-105'>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
