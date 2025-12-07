import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-5'>
        <div className='bg-[#b5902f] text-white'>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between py-3">
                <p className="text-center md:text-left mb-2 md:mb-0 text-md text-sm"> © 2025 ORO24 Facilities Management, All Rights Reserved. </p>
                    <ul className='md:flex gap-4 text-center text-sm'>
                        <li>
                            <Link className="hover:underline">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link className="hover:underline">Privacy Policy</Link> 
                        </li>
                        <li>
                            <Link className="hover:underline font-semibold">Cookies Policy</Link> 
                        </li>
                    </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer