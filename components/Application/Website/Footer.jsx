import React from 'react'
import logoBlack from "@/public/assets/images/logo-black.png";
import Image from 'next/image';
import Link from 'next/link';
import { WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_REGISTER } from '@/routes/WebsiteRoute';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
  return (
   <footer className='bg-gray-50 border-t'>
    <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 py-10 lg:px-32 px-4'>
      <div className='lg:col-span-1 md:col-span-2 col-span-1'>
         <Image
                    src={logoBlack.src}
                    width={383}
                    height={146}
                    alt="logo black"
                    className=" w-32 mb-3"
                  />
                  <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, tempora possimus quod, cumque in, fuga blanditiis reiciendis assumenda asperiores sunt quasi.</p>
      </div>
    {/* first info columns  */}
      <div>
        <h4 className='text-xl font-bold uppercase mb-5'>
          Categories 
        </h4>
        <ul>
          
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                  T-Shirt
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                  Hoodies
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                  Oversized
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                  Full-Sleeves
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                  Polo
                </Link>
          </li>
        </ul>
      </div>

      {/* second info column  */}
      <div>
        <h4 className='text-xl font-bold uppercase mb-5'>
          Useful Links 
        </h4>
        <ul>
          <li className='mb-2 text-gray-500'>
                <Link href={WEBSITE_HOME}>
                 Home
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                Shop
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                About
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href={WEBSITE_REGISTER}>
                Register
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href={WEBSITE_LOGIN}>
                Login
                </Link>
          </li>
          
        </ul>
      </div>
      {/* third info column  */}
      <div>
        <h4 className='text-xl font-bold uppercase mb-5'>
          Help Center
        </h4>
        <ul>
          <li className='mb-2 text-gray-500'>
                <Link href={WEBSITE_REGISTER}>
                 Register
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href={WEBSITE_LOGIN}>
                Login
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                My Account 
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                Privacy Policy
                </Link>
          </li>
          <li className='mb-2 text-gray-500'>
                <Link href=''>
                Terms & conditions
                </Link>
          </li>
          
        </ul>
      </div>
      {/* fourth info column  */}
      <div>
        <h4 className='text-xl font-bold uppercase mb-5'>
         Contact Us
        </h4>
        <ul>
          
          <li className='mb-2 text-gray-500 flex items-center justify-center gap-2'>
                <IoLocationOutline size={20}/>
                <span className='text-sm'>E-Store market, Dhaka, Bangladesh</span>
          </li>
         
        </ul>
      </div>
    </div>
   </footer>
  )
}

export default Footer
