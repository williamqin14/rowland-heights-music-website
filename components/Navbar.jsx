'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/RHSMA-full-logo-4.png'
import { Spin as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    setIcon(false)
  }, [pathname])

  const handleSmallerScreensNavigation = () => 
  {
    setIcon(!menuIcon)
  }

  return (
    <nav className="flex justify-between items-center p-2 pb-1 bg-gray-900 text-white w-full max-h-[80px]">
      <div>
        <Link href="/" onClick={() => setIcon(false)}>
          <Image
            src={Logo}
            alt="Rowland Heights Music School logo"
            height={250}
            width={250}
            />
        </Link>
      </div>

      {/* Larger screen navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className='nav-link cursor-pointer'>Home</Link>
        <Link href="/teachers" className='nav-link cursor-pointer'>Teachers</Link>
        <Link href="/classes" className='nav-link cursor-pointer'>Classes</Link>
        {/* <Link href="/blog" className='nav-link cursor-pointer'>Blog</Link> */}
        <Link href="/contact-us">
          <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Smaller screen navigation icon */}
      <div onClick={handleSmallerScreensNavigation} className='flex md:hidden'>
        <Hamburger toggled={menuIcon} toggle={setIcon} label="Show menu"/>
      </div>

      {/* Smaller screen - Navbar */}
      <div className={menuIcon ? 
        'md:hidden absolute top-[80px] right-0 flex justify-center items-center w-full h-[350px] bg-gray-900 text-white ease-in duration-250'
        :
        'md:hidden absolute top-[-100%] right-0 flex justify-center items-center w-full h-[350px] bg-gray-900 text-white text-center ease-in duration-250'
      }>
        <div className='w-full'>
          
          <ul className='uppercase text-center font-bold text-2xl'>
            <li className='py-5'>
              <Link href='/' onClick={handleSmallerScreensNavigation} className='hover:text-blue-500 cursor-pointer'>Home</Link>
            </li>
            <li className='py-5'>
              <Link href='/teachers' onClick={handleSmallerScreensNavigation} className='hover:text-blue-500 cursor-pointer'>Teachers</Link>
            </li>
            <li className='py-5'>
              <Link href='/classes' onClick={handleSmallerScreensNavigation} className='hover:text-blue-500 cursor-pointer'>Classes</Link>
            </li>
            {/* <li className='py-5'>
              <Link href='/blog' onClick={handleSmallerScreensNavigation} className='hover:text-blue-500 cursor-pointer'>Blog</Link>
            </li> */}
          </ul>

          <div className='flex flex-col justify-center items-center mt-8 mb-8'>
            <Link href="/contact-us" onClick={handleSmallerScreensNavigation}>
              <button className="px-8 py-4 font-bold text-2xl tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Contact Us
              </button>
            </Link>
          </div>


        </div>

        
      </div>

    </nav>

  );
}
