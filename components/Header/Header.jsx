'use client'

import React from 'react'
import Link from "next/link"
import { ShoppingCart, User2Icon, HeartIcon } from 'lucide-react'
import Image from 'next/image'
import ModeToggle from './mode-toggle'
import {
  useUser,
} from '@clerk/nextjs'

import NavLinks from './NavLinks'
import SearchBar from './SearchBar'
import { useAppContext } from '@/contexts/AppContext'
import UserDropdown from './UserDropDown'


function Header() {

  const { routesObject } = useAppContext()
  const { isSignedIn, user } = useUser()


  return (
    <header className="w-full h-15 flex items-center justify-between overflow-hidden py-2 px-4 border-b max-w-[1240px] mx-auto">

      <div>
        <Link href={routesObject["home"].path} className='flex gap-2 items-end justify-center tracking-tighter'>
          <Image src={"/images/logos/logo.svg"} alt="logo" width={30} height={30} />
          <h2 className='font-bold text-xl'>Quick Cart</h2>
        </Link>
      </div>

      <NavLinks />

      <div className=" h-full flex items-center gap-4">
        {/* <ModeToggle /> */}
        <SearchBar />
        <Link href={routesObject["wishlist"].path}>
          <HeartIcon />
        </Link>
        <Link href={routesObject["cart"].path}>
          <ShoppingCart />
        </Link>


        {isSignedIn ? (
          <UserDropdown firstName={user?.firstName || ''} imageUrl={user?.imageUrl || ''} />
        ) : (
          <Link href={routesObject["sign-in"].path}>
            <User2Icon />
          </Link>
        )}
      </div>
    </header >
  )
}

export default Header