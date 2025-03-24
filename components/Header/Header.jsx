'use client'

import React from 'react'
import Link from "next/link"
import { ShoppingBag, ShoppingCart, Star, User2Icon, LogOut, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'
import { useAppContext } from '@/contexts/AppContext'


function Header() {
  const user = "vivek"
  const { routesObject } = useAppContext()

  return (
    <header className="w-full h-15 flex items-center justify-between overflow-hidden py-2 px-4 border-b max-w-[1240px] mx-auto">

      <div>
        <Link href={routesObject["home"].path} className='flex gap-2 items-end justify-center tracking-tighter'>
          <Image src="images/logos/logo.svg" alt="logo" width={30} height={30} />
          <h2 className='font-bold text-xl'>Quick Cart</h2>
        </Link>
      </div>

      <NavLinks />

      <div className=" h-full flex items-center gap-4">
        {/* <ModeToggle /> */}
        <SearchBar />
        <Link href={routesObject["cart"].path}>
          <ShoppingCart />
        </Link>
        <SignedOut>
          <Link href={routesObject["sign-in"].path}>
            <Button variant="" className={`cursor-pointer rounded-full`}>
              <User2Icon />
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="" className={`cursor-pointer rounded-full`}>
                <User2Icon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex gap-4 w-full">
                    <User />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex gap-4 w-full">
                    <ShoppingBag />
                    <span>My Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/myreviews" className="flex gap-4 w-full">
                    <Star />
                    <span>My Reviews</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
      </div>
    </header >
  )
}

export default Header