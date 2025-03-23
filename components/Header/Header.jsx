'use client'

import React from 'react'
import Link from "next/link"
import { ShoppingBag, ShoppingCart, Star, User2Icon, LogOut, User } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'


function Header() {
  const user = "vivek"

  return (
    <header className="w-full h-15 flex items-center justify-between overflow-hidden  py-2 border-b max-w-[1240px] mx-auto">

      <div>
        <Link href="/" className='flex gap-2 items-end justify-center tracking-tighter'>
          <Image src="images/logos/logo.svg" alt="logo" width={30} height={30} />
          <h2 className='font-bold text-xl'>Quick Cart</h2>
        </Link>
      </div>

      <NavLinks />

      <div className=" h-full flex items-center gap-4">
        {/* <ModeToggle /> */}
        <SearchBar />
        <Link href="/cart">
          <ShoppingCart />
        </Link>

        {
          !user ? (
            <Button variant="" className={`cursor-pointer rounded-full`}>
              <User2Icon />
            </Button>
          ) : (
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
                    <Link href="/reviews" className="flex gap-4 w-full">
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
          )
        }

      </div>
    </header >
  )
}

export default Header