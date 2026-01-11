"use client";
import {
  USER_DASHBOARD,
  WEBSITE_HOME,
  WEBSITE_LOGIN,
} from "@/routes/WebsiteRoute";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoBlack from "@/public/assets/images/logo-black.png";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import userImage from "@/public/assets/images/user.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const auth = useSelector((store) => store.authStore.auth);
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  return (
    <div className="bg-white border-b lg:px-32 px-3 ">
      <div className="flex justify-between items-center lg:py-5 py-3">
        <Link href={WEBSITE_HOME}>
          <Image
            src={logoBlack.src}
            width={383}
            height={146}
            alt="logo black"
            className="lg:w-32 w-24"
          />
        </Link>
        <div className="flex justify-between gap-20">
          <nav
            className={`lg:relative lg:w-auto lg:top-0 lg:left-0 lg:h-auto lg:p-0 bg-white fixed z-50 top-0 w-full h-screen transition-all ${isMobileMenu ? 'left-0' : '-left-full' }`}
          >
            {/* div for mobile responsive */}
            <div className="lg:hidden flex justify-between items-center bg-gray-50 py-3 border-b px-3">
              <Image
                src={logoBlack.src}
                width={383}
                height={146}
                alt="logo black"
                className="lg:w-32 w-24"
              />
               <button type="button" onClick={()=>setIsMobileMenu(false)} >
              <IoMdClose size={25} className="text-gray-500 hover:text-primary" />
            </button>
            </div>


            <ul className="lg:flex justify-between items-center gap-10 px-3">
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href={WEBSITE_HOME} className="block py-2">
                  Home
                </Link>
              </li>
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href="" className="block py-2">
                  About
                </Link>
              </li>
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href="" className="block py-2">
                  Shop
                </Link>
              </li>
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href="" className="block py-2">
                  T-Shirt
                </Link>
              </li>
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href="" className="block py-2">
                  Hoodies
                </Link>
              </li>
              <li className="text-gray-600 hover:text-primary hover:font-semibold">
                <Link href="" className="block py-2">
                  Oversized
                </Link>
              </li>
            </ul>
          </nav>

          {/* for action button  */}
          <div className="flex justify-between items-center gap-8">
            <button type="button">
              <IoIosSearch
                className="text-gray-500 hover:text-primary cursor-pointer"
                size={25}
              />
            </button>
            <Cart />

            {!auth ? (
              <Link href={WEBSITE_LOGIN}>
                <VscAccount
                  className="text-gray-500 hover:text-primary cursor-pointer"
                  size={25}
                />
              </Link>
            ) : (
              <Link href={USER_DASHBOARD}>
                <Avatar>
                  <AvatarImage src={auth?.avatar?.url || userImage.src} />
                </Avatar>
              </Link>
            )}

            <button type="button" className="lg:hidden block" onClick={()=>setIsMobileMenu(true)}>
              <FaBars size={25} className="text-gray-500 hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
